use std::collections::HashMap;

use rand::Rng;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use crate::{
  words::{WordCategory, Words},
  JsRandom, WordsNode,
};

/// The square grid of characters in which to find words.
#[wasm_bindgen]
pub struct Grid {
  /// The number of cells on a side.
  size: usize,
  /// The characters in the grid, in row-major order.
  cells: Vec<char>,
}

/// A grid and all the words that lie in it.
#[wasm_bindgen]
pub struct SolvedGrid {
  /// The grid.
  grid: Grid,
  /// All the words in the grid, each mapped to its category.
  solution: HashMap<String, WordCategory>,
}

#[wasm_bindgen]
impl SolvedGrid {
  /// Makes a new random word grid, using the letter frequencies from the given
  /// Words, and solves it.  The size must be 4, 5, or 6.
  /// 
  /// Keeps generating new grids until it finds one with the given minimum
  /// number of words.
  #[wasm_bindgen(constructor)]
  pub fn new_js(words: &Words, size: usize, min_length: usize, min_words: usize, rng: &mut JsRandom) -> Self {
    loop {
      let grid = Grid::new(words, size, rng.rng());
      let solution = grid.find_words(words, min_length);
      if solution.len() >= min_words {
        return SolvedGrid {grid, solution}
      }
    }
  }

  #[wasm_bindgen(js_name = "gridChars")]
  pub fn grid_chars(&self) -> String {
    self.grid.cells.iter().collect()
  }

  pub fn solution(&self) -> JsValue {
    serde_wasm_bindgen::to_value(&self.solution).unwrap()
  }
}

#[wasm_bindgen]
impl Grid {
  /// Makes a new random word grid, using the letter frequencies from the given
  /// Words.  The size must be 4, 5, or 6.
  #[wasm_bindgen(constructor)]
  pub fn new_js(words: &Words, size: usize, rng: &mut JsRandom) -> Self {
    Self::new(words, size, rng.rng())
  }

  /// Returns the size of the side of the square grid.  Always 4, 5, or 6.
  pub fn size(&self) -> usize {
    self.size
  }

  /// Converts row and column into an index into the cells vector.
  fn index(&self, row: i32, col: i32) -> usize {
    assert!(row >= 0 && (row as usize) < self.size && col >= 0 && (col as usize) < self.size);
    (row as usize) * self.size + col as usize
  }

  /// Converts an index into the cells vector into a row-column pair.
  fn row_col(&self, index: usize) -> (i32, i32) {
    assert!(index < self.cells.len());
    let row = index / self.size;
    let col = index % self.size;
    (row as _, col as _)
  }

  /// Returns the character in the indicated cell.
  pub fn cell(&self, row: i32, col: i32) -> char {
    self.cells[self.index(row, col)]
  }

  /// Searches all possible paths through the grid to find words of at least
  /// min_length letters.
  #[wasm_bindgen(js_name = "findWords")]
  pub fn find_words_js(&self, words: &Words, min_length: usize) -> JsValue {
    serde_wasm_bindgen::to_value(&self.find_words(words, min_length)).unwrap()
  }
}

impl Grid {
  /// Makes a new random word grid, using the letter frequencies from the given
  /// Words.  The size must be 4, 5, or 6.
  pub fn new<R: Rng>(words: &Words, size: usize, rng: &mut R) -> Self {
    assert!(size >= 4 && size <= 6);
    let mut ncells = size * size;
    let mut cells = Vec::with_capacity(ncells);

    while ncells > 0 {
      cells.push(words.choose_letter(rng));
      ncells -= 1;
    }

    Self { size, cells }
  }

  /// Searches all possible paths through the grid to find words of at least
  /// min_length letters.
  pub fn find_words(&self, words: &Words, min_length: usize) -> HashMap<String, WordCategory> {
    let mut answer = HashMap::new();
    let node = words.root_node();

    for index in 0..self.cells.len() {
      self.collect_words(&node, min_length, index, 0, &mut answer);
    }

    answer
  }
}

/// Row/col deltas for the 8 neighbor cells.
static DELTAS: [(i32, i32); 8] = [
  (0, -1),
  (1, -1),
  (1, 0),
  (1, 1),
  (0, 1),
  (-1, 1),
  (-1, 0),
  (-1, -1),
];

impl Grid {
  /// Recursive helper for `find_words`.  Treats "q" specially by looking for
  /// "qu" words in addition to plain "q" words.
  fn collect_words(
    &self,
    node: &WordsNode,
    min_length: usize,
    index: usize,
    seen: u64,
    found: &mut HashMap<String, WordCategory>,
  ) {
    let bit = 1 << index;
    if (seen & bit) != 0 {
      return;
    }
    let seen = seen | bit;
    let ch = self.cells[index];
    let prefix = node.append_char(ch);
    let node = node.child_node(&prefix);
    self.collect_words_2(&node, min_length, index, seen, found);
    if ch == 'q' {
      let prefix = node.append_char('u');
      self.collect_words_2(&node.child_node(&prefix), min_length, index, seen, found);
    }
  }

  /// Helper helper.
  fn collect_words_2(
    &self,
    node: &WordsNode,
    min_length: usize,
    index: usize,
    seen: u64,
    found: &mut HashMap<String, WordCategory>,
  ) {
    if node.prefix.len() >= min_length {
      if let Some(category) = node.category() {
        found.insert(node.prefix.to_string(), category);
      }
    }
    if node.has_other_words() {
      let (row, col) = self.row_col(index);
      let size = self.size as i32;
      for (rd, cd) in DELTAS {
        let row = row + rd;
        let col = col + cd;
        if row >= 0 && row < size && col >= 0 && col < size {
          let index = self.index(row, col);
          self.collect_words(node, min_length, index, seen, found);
        }
      }
    }
  }
}
