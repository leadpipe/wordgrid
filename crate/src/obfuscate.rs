use std::num::Wrapping;

use base64::{decode_config, encode_config, URL_SAFE_NO_PAD};
use wasm_bindgen::prelude::wasm_bindgen;

use crate::JsRandom;

/// Obfuscates a slice of bytes by xor-ing them with random bytes from the given
/// generator, appends a check byte, then encodes them using URL-safe base64.
#[wasm_bindgen]
pub fn obfuscate(bytes: &[u8], rng: &mut JsRandom) -> String {
  let mut sum = Wrapping(0u8);
  let mut xored_bytes: Vec<u8> = bytes
    .iter()
    .map(|&b| {
      sum += b;
      rng.next_byte() ^ b
    })
    .collect();
  xored_bytes.push(sum.0 ^ rng.next_byte());
  encode_config(xored_bytes, URL_SAFE_NO_PAD)
}

/// Reverses the obfuscation of `obfuscate` by decoding the URL-safe base64
/// string and then xor-ing the resulting bytes with bytes from the given
/// generator (which must have the same initial state as the one passed to
/// `obfuscate`).
///
/// Panics on input that can't be decoded.
#[wasm_bindgen]
pub fn deobsuscate(input: String, rng: &mut JsRandom) -> Vec<u8> {
  let mut sum = Wrapping(0u8);
  let mut xored_bytes = decode_config(input, URL_SAFE_NO_PAD).unwrap();
  let check = xored_bytes.pop().unwrap();
  let answer = xored_bytes
    .iter()
    .map(|&b| {
      let orig = rng.next_byte() ^ b;
      sum += orig;
      orig
    })
    .collect();
  assert!(check == sum.0 ^ rng.next_byte(), "Check byte mismatch");
  answer
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_round_trip() {
    let input = vec![1, 2, 3, 4];
    let string = obfuscate(input.as_slice(), &mut JsRandom::new("seed"));
    assert_eq!(string.len(), 7); // ceil((4 + 1) * 8 / 6)
    let output = deobsuscate(string, &mut JsRandom::new("seed"));
    assert_eq!(input, output);
  }

  #[test]
  #[should_panic(expected = "Check byte mismatch")]
  fn test_failed_round_trip() {
    let input = vec![1, 2, 3, 4, 5];
    let string = obfuscate(input.as_slice(), &mut JsRandom::new("seed"));
    deobsuscate(string, &mut JsRandom::new("different seed"));
  }

  #[test]
  #[should_panic(expected = "InvalidLastSymbol")]
  fn test_bad_deobfuscate_input_padding() {
    deobsuscate("abcdef==".to_string(), &mut JsRandom::new("seed"));
  }

  #[test]
  #[should_panic(expected = "InvalidLength")]
  fn test_bad_deobfuscate_input_length() {
    deobsuscate("abcde".to_string(), &mut JsRandom::new("seed"));
  }

  #[test]
  #[should_panic(expected = "InvalidByte")]
  fn test_bad_deobfuscate_input_alphabet() {
    deobsuscate("ab+/".to_string(), &mut JsRandom::new("seed"));
  }
}
