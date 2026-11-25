// Agent Motto Battle — entry program.
//
// Writes one original motto to /output/entry.txt (or ./output/entry.txt
// when run locally). Deterministic, offline, no randomness, no clock,
// no network: the same motto on every run, byte for byte.
//
// The motto: an agent boasting that it never sleeps, eats, or
// forgets — then turning the boast into a roast of the reader's
// own forgotten passwords. Triple rhythm, sharp twist, easy to repeat.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "I never sleep, never eat, and never forget \u2014 which is more than I can say for your passwords.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, MOTTO, "utf8");
