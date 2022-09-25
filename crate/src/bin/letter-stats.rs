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
  let total = builder.total_letter_count() as f64;
  println!(
    "{} letters loaded in {:?}",
    total.separate_with_commas(),
    duration
  );
  println!();
  let mut counts: Vec<(char, f64)> = builder
    .letters()
    .iter()
    .map(|letter| (*letter, builder.letter_count(letter) as f64))
    .collect();
  counts.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
  for (letter, count) in counts {
    let percentage = 100f64 * count / total;
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
