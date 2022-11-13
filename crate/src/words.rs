use multiset::HashMultiSet;
use qp_trie::wrapper::BString;
use qp_trie::{SubTrie, Trie};
use rand::distributions::WeightedIndex;
use rand::prelude::Rng;
use rand_distr::Distribution;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::wasm_bindgen;

#[derive(Clone, Debug)]
#[wasm_bindgen]
pub struct Words {
  trie: Trie<BString, WordCategory>,
  letters: Vec<char>,
  letter_dist: WeightedIndex<u32>,
}

#[wasm_bindgen]
pub struct WordsBuilder {
  trie: Trie<BString, WordCategory>,
  letter_counts: HashMultiSet<char>,
  partial_line: Vec<u8>,
}

pub struct WordsNode<'a> {
  pub prefix: &'a str,
  subtrie: SubTrie<'a, BString, WordCategory>,
}

#[derive(Clone, Copy, Debug, Deserialize, Eq, Hash, Ord, PartialEq, PartialOrd, Serialize)]
#[wasm_bindgen]
pub enum WordCategory {
  /// Level 1 words are the most common.
  Level1,
  Level2,
  Level3,
  Level4,
  Level5,
  Level6,
  Level7,
  /// Level 8 words are the most obscure.
  Level8,
  /// Some hacker jargon words.
  Hacker,
  /// Some words you should never direct at other people.
  Offensive,
  /// Some words you should not use in front of children.
  Profane,
}

impl WordCategory {
  pub fn from_char(ch: char) -> Result<WordCategory, String> {
    match ch {
      '1' => Ok(Self::Level1),
      '2' => Ok(Self::Level2),
      '3' => Ok(Self::Level3),
      '4' => Ok(Self::Level4),
      '5' => Ok(Self::Level5),
      '6' => Ok(Self::Level6),
      '7' => Ok(Self::Level7),
      '8' => Ok(Self::Level8),
      'h' => Ok(Self::Hacker),
      'o' => Ok(Self::Offensive),
      'p' => Ok(Self::Profane),
      _ => Err(format!("Unrecognized category '{}'", ch)),
    }
  }
}

fn word_and_category(line: &str) -> Result<(&str, WordCategory), String> {
  let bytes = line.as_bytes();
  let len = bytes.len();
  if len < 2 {
    return Err(format!("Each line must look like 'word:c'; got '{}'", line));
  }
  let sep = bytes[len - 2] as char;
  if sep != ':' {
    return Err(format!(
      "Each word in the file must be followed by ':'; found '{}' on line '{}'",
      sep, line
    ));
  }
  Ok((
    &line[0..len - 2],
    WordCategory::from_char(bytes[len - 1] as char)?,
  ))
}

#[wasm_bindgen]
impl WordsBuilder {
  #[wasm_bindgen(constructor)]
  pub fn new() -> Self {
    Self {
      trie: Trie::new(),
      letter_counts: HashMultiSet::new(),
      partial_line: vec![],
    }
  }

  pub fn build(mut self) -> Words {
    if self.partial_line.len() > 0 {
      let last_line = self.partial_line.clone();
      self
        .add_line(std::str::from_utf8(&last_line).unwrap())
        .unwrap();
    }
    let letters = self.letters();
    let letter_dist =
      WeightedIndex::new(letters.iter().map(|letter| self.letter_count(letter))).unwrap();
    Words {
      trie: self.trie,
      letters,
      letter_dist,
    }
  }

  #[wasm_bindgen(js_name = "addLine")]
  pub fn add_line(&mut self, line: &str) -> Result<(), String> {
    let (word, category) = word_and_category(&line)?;
    self.trie.insert_str(word, category);
    for ch in word.chars() {
      self.letter_counts.insert(ch);
    }
    Ok(())
  }

  #[wasm_bindgen(js_name = "addLines")]
  pub fn add_lines_from_chunk(&mut self, chunk: &[u8]) -> Result<(), String> {
    // Note that the file is pure ASCII, which is what allows this simple split to work.
    let mut iter = chunk.split(|&ch| ch == '\n' as u8).peekable();
    let mut partial = self.partial_line.len() > 0;
    while let Some(line) = iter.next() {
      if iter.peek().is_some() {
        if partial {
          let line = [&self.partial_line, line].concat();
          self.add_line(std::str::from_utf8(&line).unwrap())?;
          self.partial_line.clear();
          partial = false;
        } else {
          self.add_line(std::str::from_utf8(line).unwrap())?;
        }
      } else {
        // Last line, save it for next time.
        self.partial_line.extend_from_slice(line);
      }
    }
    Ok(())
  }
}

impl WordsBuilder {
  /// Returns a sorted list of all the characters that appear in the words added
  /// so far.
  pub fn letters(&self) -> Vec<char> {
    let mut letters: Vec<char> = self.letter_counts.distinct_elements().copied().collect();
    letters.sort_unstable();
    letters
  }

  /// Returns the number of times the given letter appears in the words added so
  /// far.
  pub fn letter_count(&self, letter: &char) -> u32 {
    self.letter_counts.count_of(letter) as _
  }

  /// Returns the total number of letters that appear in all words added so far.
  pub fn total_letter_count(&self) -> u32 {
    self.letter_counts.len() as _
  }
}

#[wasm_bindgen]
impl Words {
  pub fn builder() -> WordsBuilder {
    WordsBuilder::new()
  }

  /// The number of words in the dictionary.
  pub fn count(&self) -> usize {
    self.trie.count()
  }

  pub fn letters(&self) -> String {
    String::from_iter(self.letters.iter())
  }
}

impl Words {
  /// Picks a letter at random, according to the frequencies of all the letters
  /// in the dictionary.
  pub fn choose_letter<R: Rng>(&self, rng: &mut R) -> char {
    self.letters[self.letter_dist.sample(rng)]
  }

  /// Returns the trie's root node.
  pub fn root_node(&self) -> WordsNode {
    WordsNode { prefix: "", subtrie: self.trie.subtrie_str("") }
  }

  /// Returns the category of the word, if it is indeed in the set of words.
  pub fn word_category(&self, word: &str) -> Option<WordCategory> {
    self.root_node().child_node(word).category()
  }
}

impl <'a> WordsNode<'a> {
  /// If this node's prefix is itself a full word, returns its category; else
  /// returns `None`.
  pub fn category(&self) -> Option<WordCategory> {
    self.subtrie.get(self.prefix.as_bytes()).map(|&cat| cat)
  }

  /// Tells whether there are words in the trie that start with this node's
  /// prefix but are longer than it.
  pub fn has_other_words(&self) -> bool {
    if self.subtrie.is_empty() {
      false
    } else if self.subtrie.get(self.prefix.as_bytes()).is_none() {
      // We know that the subtrie is not empty, and we've just shown that this
      // node's prefix is not itself a word, so there must be at least one word
      // that strictly starts with this node's prefix.
      true
    } else {
      let mut iter = self.subtrie.iter();
      iter.next(); // Our prefix: we know it's in there
      iter.next().is_some() // ...and is there at least one other word?
    }
  }

  /// Lengthens this node's prefix with the given character.
  pub fn append_char(&self, ch: char) -> String {
    let mut prefix: String = self.prefix.into();
    prefix.push(ch);
    prefix
  }

  /// Returns the child node for the given prefix, which must be an extension of
  /// this node's prefix.
  pub fn child_node(&'a self, prefix: &'a str) -> WordsNode {
    debug_assert!(prefix.starts_with(self.prefix));
    WordsNode { prefix, subtrie: self.subtrie.subtrie(prefix.as_bytes()) }
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_single_complete_chunk() {
    let mut builder = Words::builder();
    builder
      .add_lines_from_chunk("aaa:1\nbbb:2\n".as_bytes())
      .unwrap();
    let words = builder.build();
    assert_eq!(words.count(), 2);
    assert_eq!(words.word_category("aaa"), Some(WordCategory::Level1));
    assert_eq!(words.word_category("bbb"), Some(WordCategory::Level2));
  }

  #[test]
  fn test_single_incomplete_chunk() {
    let mut builder = Words::builder();
    builder
      .add_lines_from_chunk("aaa:1\nbbb:2".as_bytes())
      .unwrap();
    let words = builder.build();
    assert_eq!(words.count(), 2);
    assert_eq!(words.word_category("aaa"), Some(WordCategory::Level1));
    assert_eq!(words.word_category("bbb"), Some(WordCategory::Level2));
  }

  #[test]
  fn test_multiple_chunks_complete() {
    let mut builder = Words::builder();
    builder.add_lines_from_chunk("aaa:".as_bytes()).unwrap();
    builder
      .add_lines_from_chunk("1\nbbb:2\n".as_bytes())
      .unwrap();
    let words = builder.build();
    assert_eq!(words.count(), 2);
    assert_eq!(words.word_category("aaa"), Some(WordCategory::Level1));
    assert_eq!(words.word_category("bbb"), Some(WordCategory::Level2));
  }

  #[test]
  fn test_multiple_chunks_incomplete() {
    let mut builder = Words::builder();
    builder.add_lines_from_chunk("aaa:".as_bytes()).unwrap();
    builder.add_lines_from_chunk("1\nbbb:2".as_bytes()).unwrap();
    let words = builder.build();
    assert_eq!(words.count(), 2);
    assert_eq!(words.word_category("aaa"), Some(WordCategory::Level1));
    assert_eq!(words.word_category("bbb"), Some(WordCategory::Level2));
  }
}
