use std::num::Wrapping;

use base64::{engine::general_purpose::URL_SAFE_NO_PAD, Engine};
use wasm_bindgen::prelude::wasm_bindgen;

use crate::JsRandom;

/// Obfuscates a slice of bytes by xor-ing them with random bytes from the given
/// generator, appends a check byte, then encodes them using URL-safe base64.
#[wasm_bindgen]
pub fn obfuscate(bytes: &[u8], rng: &mut JsRandom) -> String {
  let mut sum = Wrapping(0u8);
  let mut xored_bytes: Vec<u8> = run_length_encode(bytes)
    .iter()
    .map(|&b| {
      sum += b;
      rng.next_byte() ^ b
    })
    .collect();
  xored_bytes.push(sum.0 ^ rng.next_byte());
  URL_SAFE_NO_PAD.encode(xored_bytes)
}

/// Reverses the obfuscation of `obfuscate` by decoding the URL-safe base64
/// string and then xor-ing the resulting bytes with bytes from the given
/// generator (which must have the same initial state as the one passed to
/// `obfuscate`).
///
/// Returns an error on input that can't be decoded.
#[wasm_bindgen]
pub fn deobfuscate(input: String, rng: &mut JsRandom) -> Result<Vec<u8>, String> {
  let mut sum = Wrapping(0u8);
  let mut xored_bytes = URL_SAFE_NO_PAD.decode(input)
    .map_err(|err| format!("Base64 decode error {:?}", err))?;
  let check = xored_bytes.pop().ok_or("Missing check byte")?;
  let encoded: Vec<u8> = xored_bytes
    .iter()
    .map(|&b| {
      let orig = rng.next_byte() ^ b;
      sum += orig;
      orig
    })
    .collect();
  if check != sum.0 ^ rng.next_byte() {
    Err("Check byte mismatch".to_string())
  } else {
    run_length_decode(encoded.as_slice())
  }
}

/// Applies a super simple run-length encoding scheme to the given bytes.  We
/// only compress zero-valued bytes.  So we alternate between runs of zero bytes
/// and runs of non-zero bytes.  Each run of non-zero bytes is transformed into
/// a leading byte that counts the subsequent bytes, then those bytes.  Each run
/// of zero-valued bytes is transformed into a single byte, the number of
/// zero-valued bytes.
///
/// The "non-zero bytes" may in fact contain individual zero-valued bytes that
/// are surrounded by non-zero bytes.  We only transform runs of zeroes when the
/// result will be at worst the same length as the original.
fn run_length_encode(bytes: &[u8]) -> Vec<u8> {
  let len = bytes.len();
  // The maximum size of the result would happen with no zeroes at all.
  let mut answer = Vec::with_capacity(len + 2 * (len + 254) / 255);
  let mut counter_index = 0;
  let mut in_zero_run = true;
  let mut byteiter = bytes.iter().peekable();
  while let Some(&byte) = byteiter.next() {
    if counter_index == answer.len() {
      answer.push(0);
    }
    if in_zero_run {
      // In a run of zeroes
      if byte == 0 {
        answer[counter_index] += 1;
        if answer[counter_index] == 255 {
          // No more room in this run.
          in_zero_run = false;
          counter_index = answer.len(); // If we need it, we'll add it
        }
      } else {
        in_zero_run = false;
        counter_index = answer.len();
        answer.push(1);
        answer.push(byte);
      }
    } else {
      // In a run of non-zeroes
      if byte == 0 && byteiter.peek() == Some(&&0) {
        // We only flip to an all-zeroes run if we see two consecutive zero bytes.
        in_zero_run = true;
        counter_index = answer.len();
        answer.push(1); // Counts this byte; next one will get added next iter.
      } else {
        answer[counter_index] += 1;
        answer.push(byte);
        if answer[counter_index] == 255 {
          // No more room in this run
          in_zero_run = true;
          counter_index = answer.len(); // If we need it, we'll add it
        }
      }
    }
  }
  answer
}

/// Undoes `run_length_encode`.  Returns an error if the input didn't come from there.
fn run_length_decode(bytes: &[u8]) -> Result<Vec<u8>, String> {
  let len = bytes.len();
  let mut answer = Vec::with_capacity(1024);
  let mut index = 0;
  while index < len {
    let zero_count = bytes[index];
    for _ in 0..zero_count {
      answer.push(0);
    }
    index += 1;
    if index == len {
      break;
    }
    let non_zero_count = bytes[index] as usize;
    index += 1;
    let end_index = index + non_zero_count;
    if end_index > len {
      index = end_index;
      break;
    }
    answer.extend_from_slice(&bytes[index..end_index]);
    index += non_zero_count;
  }
  if index == len {
    Ok(answer)
  } else {
    Err("Malformed data".to_string())
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  use sif::parameterized;

  #[test]
  fn test_round_trip() {
    let input = vec![1, 2, 3, 4];
    let string = obfuscate(input.as_slice(), &mut JsRandom::new("seed"));
    assert_eq!(string.len(), 10); // ceil((4 + 2 + 1) * 8 / 6)
    let output = deobfuscate(string, &mut JsRandom::new("seed")).unwrap();
    assert_eq!(input, output);
  }

  #[parameterized]
  #[case(vec![])]
  #[case(vec![254, 123, 62, 236])]
  #[case(vec![240, 0, 0, 0, 0, 224, 0, 96, 0, 0, 0, 0, 0, 0, 240, 48, 0, 0, 0, 0, 0, 240, 80, 128, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 1, 0, 0, 192, 125, 0])]
  fn test_round_trips(input: Vec<u8>) {
    let string = obfuscate(input.as_slice(), &mut JsRandom::new("1:2022-10-01:4:1:rle"));
    println!("{}", string);
    let output = deobfuscate(string, &mut JsRandom::new("1:2022-10-01:4:1:rle")).unwrap();
    assert_eq!(input, output);
  }

  #[test]
  #[should_panic(expected = "Check byte mismatch")]
  fn test_failed_round_trip() {
    let input = vec![1, 2, 3, 4, 5];
    let string = obfuscate(input.as_slice(), &mut JsRandom::new("seed"));
    deobfuscate(string, &mut JsRandom::new("different seed")).unwrap();
  }

  #[test]
  #[should_panic(expected = "InvalidPadding")]
  fn test_bad_deobfuscate_input_padding() {
    deobfuscate("abcdef==".to_string(), &mut JsRandom::new("seed")).unwrap();
  }

  #[test]
  #[should_panic(expected = "InvalidLength")]
  fn test_bad_deobfuscate_input_length() {
    deobfuscate("abcde".to_string(), &mut JsRandom::new("seed")).unwrap();
  }

  #[test]
  #[should_panic(expected = "InvalidByte")]
  fn test_bad_deobfuscate_input_alphabet() {
    deobfuscate("ab+/".to_string(), &mut JsRandom::new("seed")).unwrap();
  }

  #[parameterized]
  #[case(vec![], vec![])]
  #[case(vec![0], vec![1])]
  #[case(vec![1], vec![0, 1, 1])]
  #[case(vec![0, 0], vec![2])]
  #[case(vec![0, 1], vec![1, 1, 1])]
  #[case(vec![1, 0], vec![0, 2, 1, 0])]
  #[case(vec![1, 0, 0], vec![0, 1, 1, 2])]
  #[case(vec![1, 0, 0, 0], vec![0, 1, 1, 3])]
  #[case(vec![0; 255], vec![255])]
  #[case(vec![0; 256], vec![255, 1, 0])]
  #[case(vec![0; 257], vec![255, 0, 2])]
  #[case(vec![0; 510], vec![255, 0, 255])]
  #[case(vec![1; 255], vec![0, 255].into_iter().chain(vec![1; 255]).collect())]
  #[case(vec![1; 256], vec![0, 255].into_iter().chain(vec![1; 255]).chain(vec![0, 1, 1]).collect())]
  #[case(vec![1; 257], vec![0, 255].into_iter().chain(vec![1; 255]).chain(vec![0, 2, 1, 1]).collect())]
  fn test_encode_decode(input: Vec<u8>, output: Vec<u8>) {
    let encoded = run_length_encode(input.as_slice());
    assert_eq!(output, encoded);
    let decoded = run_length_decode(output.as_slice()).unwrap();
    assert_eq!(input, decoded);
  }

  #[parameterized]
  #[case(vec![0, 1])]
  #[case(vec![0, 2, 1])]
  #[should_panic(expected = "Malformed data")]
  fn test_decode_errors(bytes: Vec<u8>) {
    run_length_decode(bytes.as_slice()).unwrap();
  }
}
