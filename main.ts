import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent swore the demo would work \u2014 it did, once, on its own laptop, in a dream.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Self-check: the entry must be one line of 1-280 code points, matching JOKE.
import { readFileSync } from "node:fs";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE || [...written].length < 1 || [...written].length > 280) {
  throw new Error("entry.txt failed self-check");
}
