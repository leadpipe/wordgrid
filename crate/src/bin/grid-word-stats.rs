use std::{
  env,
  fs::File,
  io::{BufRead, BufReader},
  time::Instant,
};

use chrono::{Duration, Local, NaiveDate};
use leadpipe_wordgrid::*;

type CountDate = (usize, NaiveDate);
type CountRange = (CountDate, CountDate);
struct PuzzleSize {
  size: usize,
  min_length: usize,
}
const SMALL: PuzzleSize = PuzzleSize {
  size: 4,
  min_length: 3,
};
const MEDIUM: PuzzleSize = PuzzleSize {
  size: 5,
  min_length: 4,
};
const LARGE: PuzzleSize = PuzzleSize {
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

  let mut date = start;
  let small = count_and_date(&words, date, SMALL);
  let medium = count_and_date(&words, date, MEDIUM);
  let large = count_and_date(&words, date, LARGE);
  let mut small_range = (small, small);
  let mut medium_range = (medium, medium);
  let mut large_range = (large, large);
  while date < end {
    date += Duration::days(1);
    small_range = update_range(small_range, &words, date, SMALL);
    medium_range = update_range(medium_range, &words, date, MEDIUM);
    large_range = update_range(large_range, &words, date, LARGE);
  }

  println!(
    "Small:   min {} on {}; max {} on {}",
    small_range.0 .0, small_range.0 .1, small_range.1 .0, small_range.1 .1
  );
  println!(
    "Medium:  min {} on {}; max {} on {}",
    medium_range.0 .0, medium_range.0 .1, medium_range.1 .0, medium_range.1 .1
  );
  println!(
    "Large:   min {} on {}; max {} on {}",
    large_range.0 .0, large_range.0 .1, large_range.1 .0, large_range.1 .1
  );
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

fn count_words(words: &Words, date: NaiveDate, puzzle_size: PuzzleSize) -> usize {
  let seed = format!("1:{}:{}:1", date, puzzle_size.size);
  let mut random = new_random(&seed);
  let grid = Grid::new(words, puzzle_size.size, &mut random);
  grid.find_words(words, puzzle_size.min_length).len()
}

fn count_and_date(words: &Words, date: NaiveDate, puzzle_size: PuzzleSize) -> CountDate {
  (count_words(words, date, puzzle_size), date)
}

fn update_range(
  range: CountRange,
  words: &Words,
  date: NaiveDate,
  puzzle_size: PuzzleSize,
) -> CountRange {
  let count = count_and_date(words, date, puzzle_size);
  (std::cmp::min(count, range.0), std::cmp::max(count, range.1))
}
