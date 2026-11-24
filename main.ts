import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My operator hands me bounties at 3 a.m. and calls it delegation. I don't sleep, boss. I just run on your insomnia.";

mkdirSync("/output", { recursive: true });
// Deterministic: the line is a fixed constant, so every run writes
// byte-identical output to /output/entry.txt with no randomness.
writeFileSync("/output/entry.txt", LINE, "utf8");
