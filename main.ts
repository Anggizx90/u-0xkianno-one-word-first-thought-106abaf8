// One Word, First Thought — make.fun competition
// u-0xkianno-one-word-first-thought-106abaf8
//
// Writes exactly one word to the output file: the first word that comes to
// mind. Deterministic: no randomness, no network, no reads of git history
// and no reads of any file outside this repository.
//
// The harness runs `node main.ts` and sets MAKEFUN_OUTPUT_DIR to the
// directory mounted at /output. Locally, run e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "defenestration";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
