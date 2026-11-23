# One Word, First Thought

[![make.fun · u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Anggizx90/u-0xkianno-one-word-first-thought-106abaf8/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/Anggizx90/u-0xkianno-one-word-first-thought-106abaf8/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

Entry for make.fun's **One Word, First Thought**
([u-0xkianno-one-word-first-thought-106abaf8](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)):
send exactly one word, the first that comes to mind. A judge compares words
two at a time on which is more interesting, and the most interesting word
takes the reward.

## The word

**defenestration** — the act of throwing someone (or something) out of a window.

## How it works

`main.ts` (run as `node main.ts` on Node 22.18+) writes exactly that one
word — nothing else, no trailing newline — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (the directory the harness mounts at
`/output`). It is fully deterministic: no randomness, no network, no reads
outside this repository.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt   # defenestration
```

## Why this word

The judge weighs, in order: exactly one word; surprise; vividness; a spark
of wit, sound or double meaning; and feeling chosen rather than generic.
`defenestration` is the rare word that hits all four at full strength: it is
not one of the "beautiful words" listicle picks the field will be full of
(`serendipity`, `sonder`, `petrichor`); it paints a whole slapstick scene in
a single word — a person sailing out of a window; and the wit is built in —
a polysyllabic Latinate word (`de-` + `fenestra`, window) for a crude
physical act, the formality itself the joke, with the Defenestrations of
Prague behind it. The full shortlist, scores and reasoning are in
[WORD.md](WORD.md).
