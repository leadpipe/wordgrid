use std::{
  fs::File,
  io::{BufRead, BufReader},
  time::Instant,
};

use leadpipe_wordgrid::*;
use multiset::HashMultiSet;

/// Generates a word grid, finds all its words, and prints some info.
fn main() {
  eprint!("Loading words... ");
  let start = Instant::now();
  let words = build_words_from_file("../words-v1.txt");
  let duration = start.elapsed();
  println!("{} words loaded in {:?}", words.count(), duration);
  for i in 0..100 {
    let seed = format!("test{}", &i);
    let mut random = new_random(&seed);
    let grid = Grid::new(&words, 6, &mut random);
    println!();
    for row in 0..grid.size() {
      for col in 0..grid.size() {
        print!(" {}", grid.cell(row as _, col as _).to_uppercase());
      }
      println!();
    }
    println!();
    let start = Instant::now();
    let mut found: Vec<_> = grid.find_words(&words, 5).into_iter().collect();
    let duration = start.elapsed();
    found.sort_unstable_by(|(w1, c1), (w2, c2)| (c1, w1).cmp(&(c2, w2)));
    println!(
      "{}: {} words of at least length 5 found in {:?}",
      seed,
      found.len(),
      duration
    );
    let mut cat_counts = HashMultiSet::new();
    for (_, cat) in found {
      cat_counts.insert(cat);
    }
    let mut cats: Vec<_> = cat_counts.distinct_elements().copied().collect();
    cats.sort_unstable();
    for cat in cats {
      print!("  {:?}: {}", cat, cat_counts.count_of(&cat));
    }
    println!();
  }
}

fn build_words_from_file(fname: &str) -> Words {
  let f = File::open(fname).unwrap();
  let f = BufReader::new(f);
  let mut builder = WordsBuilder::new();
  for line in f.lines() {
    builder.add_line(&line.unwrap()).unwrap();
  }
  builder.build()
}
