use std::{
  fs::File,
  io::{BufRead, BufReader},
  time::Instant,
};

use leadpipe_wordgrid::*;
use thousands::Separable;

/// Generates a word grid, finds all its words, and prints some info.
fn main() {
  eprint!("Loading words... ");
  let start = Instant::now();
  let builder = fill_builder_from_file("../words-v1.txt");
  let duration = start.elapsed();
  let total = builder.total_letter_count();
  println!(
    "{} letters loaded in {:?}",
    total.separate_with_commas(),
    duration
  );
  println!();
  for letter in builder.letters() {
    let count = builder.letter_count(&letter);
    let percentage = 100f64 * (count as f64) / (total as f64);
    println!(
      "{}: {:>8} ({:.2}%)",
      letter,
      count.separate_with_commas(),
      percentage,
    );
  }
}

fn fill_builder_from_file(fname: &str) -> WordsBuilder {
  let f = File::open(fname).unwrap();
  let f = BufReader::new(f);
  let mut builder = WordsBuilder::new();
  for line in f.lines() {
    builder.add_line(&line.unwrap()).unwrap();
  }
  builder
}
