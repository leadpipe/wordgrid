LEADPIPE WORDGRID is a word-finding game that runs in your web browser. Trace
through neighboring letters in the grid, in any direction, to form words. Each
valid word is worth points. Accumulate as many points as possible before the
timer runs out — or turn off the timer and just look for words at your leisure.

# Game play

Start, pause, and resume the game using the familiar controls below the grid. To
quit a game, pause it and hit the smaller Stop control to the right below the
grid.

On a device with a keyboard, you can type the space bar to pause or resume the
game.

Form words by tracing letters on the grid: touch the first letter, then drag to
the rest of the letters of the word. Lift your finger from the last letter to
record the word.

You can go from one letter to any of its eight neighbors, straight or diagonal.
But you can't use the same letter location more than once in a word.

As you trace letters, the word being formed appears below the grid. When the
current preview string corresponds to a word, it shows you by changing color. If
you arrive at a word that you've already recorded, it shows you that too.

With a keyboard, you can type letters in lieu of tracing them. Hit `Enter` to
record the word, or `Escape` to cancel what you've typed. If you type a word
that can't be traced on the grid, the previewed word will change color to show
you that.

`Q`s are special. They appear in the grid with an accompanying `u`, and they can
be used to form words _with or without_ that `U`. When you trace a word through
a `Q`, you will see two words in the preview location, reflecting both
possibilities. For example, if you trace `T R A N Qu I L` through the grid, you
will see previewed two strings: `TRANQIL` (not a word) and `TRANQUIL` (is a
word). Before you get to the `I L`, you'll see `TRANQ` (is a word) and `TRANQU`
(not a word). When you lift your finger, any previewed string that is a word
will be recorded.

## Scoring

Each word is worth a set number of points depending on the number of letters in
it.

| Length of word  | Number of points |
| :-------------: | :--------------: |
|     3 or 4      |        1         |
|        5        |        2         |
|        6        |        3         |
|        7        |        5         |
|        8        |        11        |
| 9 or more $(n)$ |       $2n$       |

You earn points by recording words before the timer expires. You may continue to
find words after the timer expires, but won't be awarded any more points.

You may turn off the timer by clicking the eye icon below it. You'll still stop
accumulating points after the set number of minutes.

## Word categories

Each word in Wordgrid's dictionary is assigned a category. The categories are
levels 1 through 8, plus hacker, offensive, and profane. In general, the lower
levels are more common words and the higher levels are more obscure. Hacker
words are terms of art of the world of computers, while offensive and profane
words are likely familiar but offensive and/or profane.

When you record a word, it appears next to the grid. You may tap the word for
more information about it, including its category and the number of points it
confers. There is also a link to look the word up.

On the left side of the grid, below the summary of how far you are through the
puzzle, you can expand a list of your found words arranged by category. Each
category containing any words in the puzzle appears, with stats pertaning to
that category.

## Game sizes

Wordgrid has small, medium, and large games:

| Game size | Grid size | Min word length | Time      |
| --------- | --------- | --------------- | --------- |
| Small     | 4⨉4       | 3               | 3 minutes |
| Medium    | 5⨉5       | 4               | 3 minutes |
| Large     | 6⨉6       | 5               | 4 minutes |

## Daily game

Each day a new game appears, in one of the sizes. Everybody gets the same daily
game. You may play it or not.

## History

The history page shows all the games you've played, arranged by when you last
played them. You can resume paused games, and see what words you found in any
game.

After you quit a game, it's considered complete. When you expand a complete
game, you can see the grid and _all_ the words that appear within it, arranged
by category. Each word that you found is marked, with the ones you found before
the time ran out indicating how many points that word contributed to your total.
Tap a word in the list to see a path through the grid that yields that word.

You start on the play page. To get to the history page, either complete a game
(that is, quit it) or tap the left arrow above and to the left of the grid.

## Sharing

When you have completed a game, you can share it with others by entering the
name you want to share as, and hitting enter. This will run the standard sharing
logic of your device, or copy the share information to the clipboard. You can
text or chat or email it to whomever you want to share with.

The URL included in the shared text indicates which words you found. When
someone clicks that link, Wordgrid saves your words for that person to compare
with their own set of words. If they share back to you, you will both be able to
see what the other found.

You can click many people's share links for the same game, and you will see all
of their found words.

# Privacy

Wordgrid uses [Google Analytics
4](https://developers.google.com/analytics/devguides/collection/ga4)(GA4) to
track how and where the app is used. That is, it sends tiny messages describing
the actions you have taken in the game to GA4, which aggregates this information
into useful statistics it presents as charts and graphs.

Wordgrid has no idea who you are, what your interests are (apart from word
games, apparently), or even how many different devices you play Wordgrid on.
Each distinct device or browser profile appears to be a different person within
GA4. GA4 translates your IP address into a rough geographic location, but that
is all it does with IP addresses — it does not store them.

# Design

Wordgrid is a [progressive web
app](https://www.google.com/search?q=define+%2Bpwa) (PWA). It runs entirely in
the browser. There is no server component.

Wordgrid works offline. You do not need to be connected to the internet to use
it. Its [service
worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
caches all its files. It stores your game history in your browser's
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

Wordgrid uses [WebAssembly](https://www.google.com/search?q=define+%2Bwasm)
(Wasm) for the [web
worker](https://developer.mozilla.org/en-US/docs/Web/API/Worker) that generates
grids and finds all the words they contain. This portion is written in
[Rust](https://www.rust-lang.org/) and compiled to Wasm using
[wasm-pack](https://github.com/rustwasm/wasm-pack).

Wordgrid generates grids using the distribution of letters in its dictionary. It
chooses a letter for each location independently, using that distribution. Only
then does it search for words. Using the full letter distribution to generate
the grid has the effect of making common letters appear much more often, and
rare letters much less often, than in the classic dice-based games, which must
quantize those distributions. This in turn makes the typical grid contain more
and rarer words. A happy side effect of doing the simplest thing possible.

For the UI, Wordgrid uses [Lit](https://lit.dev/) in
[TypeScript](https://www.typescriptlang.org/). Lit makes it easy to write [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## The dictionary

Wordgrid's list of words derives from the excellent
[SCOWL](http://wordlist.aspell.net/scowl-readme/). I use all the `-word` files
through level 80, plus the extra miscellaneous naughty and hacker words. I
relabel the numerical levels to just the first digit (so a level 80 SCOWL word
becomes a level 8 Wordgrid word).

I deduplicate words to the higher level: so if a word appears in a level 3 and a
level 8 list, I categorize it as level 8. For this deduplication step, I treat
the hacker category as less than level 1, and the offensive and profane levels
as higher than level 8. This has the effect that Wordgrid categorizes a word
"hacker" only if it doesn't also appear in a different category; and that
"profane" and "offensive" words always retain all the words assigned to them.

# Acknowledgements and copyrights

Wordgrid descends from [Boggle](https://en.wikipedia.org/wiki/Boggle)™️, and
from a now defunct Android app called WordzUp.

SCOWL (the source of Wordgrid's dictionary) is marked with the following
copyright and permission notice:

> Copyright 2000-2018 by Kevin Atkinson

> Permission to use, copy, modify, distribute and sell these word
> lists, the associated scripts, the output created from the scripts,
> and its documentation for any purpose is hereby granted without fee,
> provided that the above copyright notice appears in all copies and
> that both that copyright notice and this permission notice appear in
> supporting documentation. Kevin Atkinson makes no representations
> about the suitability of this array for any purpose. It is provided
> "as is" without express or implied warranty.

[MDN](https://developer.mozilla.org/en-US/) is my go-to source for everything
Web. I visit MDN many times every day.

[QP-Trie](https://docs.rs/qp-trie/latest/qp_trie/) is the screamingly fast trie
implementation that lets Wordgrid search a letter grid for all possible words in
a heartbeat. [Rand_pcg](https://docs.rs/rand_pcg/latest/rand_pcg/) and
[rand_seeder](https://docs.rs/rand_seeder/latest/rand_seeder/) are the building
blocks for random number generation that allows all instances of Wordgrid to
produce the same set of puzzles each day.
[Wasm-bindgen](https://rustwasm.github.io/wasm-bindgen/) is the tool that
bridges the gap between Rust-Wasm code and the JavaScript that powers the UI.

On the JavaScript/TypeScript side, [idb](https://github.com/jakearchibald/idb)
is fantastic at making IndexedDB practical to use. [Lit](https://lit.dev/) makes
writing web components super simple and fun.

Wordgrid uses three fonts, all hosted on the invaluable
[Fontsource](https://fontsource.org/).

- All its icons are from the [Material
  Icons](https://fontsource.org/fonts/material-icons) font by Google.
- The letters in the grid are rendered in [Merriweather
  Sans](https://fontsource.org/fonts/merriweather-sans).
  - MerriweatherSans[wght].ttf: Copyright 2019 The Merriweather Project Authors
    (https://github.com/SorkinType/Merriweather-Sans)
- All the rest of the app is in [Prompt](https://fontsource.org/fonts/prompt).
  - Prompt-[wght].ttf: Copyright (c) 2015, Cadson Demak (info@cadsondemak.com)
