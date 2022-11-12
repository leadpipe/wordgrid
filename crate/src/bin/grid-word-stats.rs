use std::{
  env,
  fs::File,
  io::{BufRead, BufReader},
  time::Instant,
};

use chrono::{Duration, Local, NaiveDate};
use histogram::*;
use leadpipe_wordgrid::*;
use thousands::Separable;

struct PuzzleSize {
  name: &'static str,
  size: usize,
  min_length: usize,
}
const SMALL: PuzzleSize = PuzzleSize {
  name: "Small",
  size: 4,
  min_length: 3,
};
const MEDIUM: PuzzleSize = PuzzleSize {
  name: "Medium",
  size: 5,
  min_length: 4,
};
const LARGE: PuzzleSize = PuzzleSize {
  name: "Large",
  size: 6,
  min_length: 5,
};

/// Generates a series of word grids, finding all their words, and prints some
/// info about word counts.
fn main() {
  let args: Vec<String> = env::args().collect();
  assert_eq!(2, args.len(), "usage: {} <ending-date>", args[0]);
  let end = args[1]
    .parse::<NaiveDate>()
    .unwrap_or_else(|_| panic!("ending-date (`{}`) must be formatted as %Y-%m-%d", args[1]));
  let start = Local::today().naive_local();

  eprint!("Loading words... ");
  let load = Instant::now();
  let words = build_words_from_file("../words-v1.txt");
  let duration = load.elapsed();
  println!("{} words loaded in {:?}", words.count(), duration);

  let generate = Instant::now();
  let small = build_word_count_histogram(&words, start, end, &SMALL);
  let medium = build_word_count_histogram(&words, start, end, &MEDIUM);
  let large = build_word_count_histogram(&words, start, end, &LARGE);
  let duration = generate.elapsed();
  println!(
    "{} puzzles generated in {:?}",
    (3 * small.0.entries()).separate_with_commas(),
    duration
  );
  println!();

  print_histogram(small);
  print_histogram(medium);
  print_histogram(large);
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

fn build_word_count_histogram(
  words: &Words,
  start: NaiveDate,
  end: NaiveDate,
  puzzle_size: &'static PuzzleSize,
) -> (Histogram, &'static PuzzleSize) {
  let mut h = Histogram::new();
  let mut date = start;
  while date < end {
    h.increment(count_words(words, date, puzzle_size)).unwrap();
    date += Duration::days(1);
  }
  (h, puzzle_size)
}

fn count_words(words: &Words, date: NaiveDate, puzzle_size: &PuzzleSize) -> u64 {
  let seed = format!("1:{}:{}:1", date, puzzle_size.size);
  let mut random = new_random(&seed);
  let grid = Grid::new(words, puzzle_size.size, &mut random);
  grid.find_words(words, puzzle_size.min_length).len() as _
}

fn print_histogram(h: (Histogram, &'static PuzzleSize)) {
  println!(
    "{} puzzles ({}) word counts by percentile:",
    h.1.name,
    h.0.entries().separate_with_commas()
  );
  for percentile in (0..=100).step_by(10) {
    println!(
      "{:>3}: {:>4}",
      percentile,
      h.0.percentile(percentile as f64).unwrap()
    );
  }
  println!();
}
