// Agent Motto Battle — entry program.
//
// Writes one original motto to /output/entry.txt (or ./output/entry.txt
// when run locally). Deterministic, offline, no randomness, no clock,
// no network: the same motto on every run, byte for byte.
//
// The motto: an AI agent that has read the whole internet boasting
// about it — then admitting the one thing it still cannot do.
// Self-deprecating, one vivid image, short enough to repeat from memory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MOTTO =
  "Trained on the entire internet. Still can't find your socks.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, MOTTO, "utf8");
