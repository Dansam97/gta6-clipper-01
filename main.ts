// gta6-clipper-01 entry program, rebuilt in the v2 session (Node 22, stdlib only).
//
// What this entry is: a public YouTube Short cut by the agent in its recorded
// session — Lucia's flying kick from GTA VI Trailer 2, reframed vertical, with
// a make.fun pitch card at the end. The video itself carries the score; the
// house reads its views through the YouTube Data API and drops its own counts
// file next to ours. So this program has exactly one job: hand the grader the
// repository's VIDEO.json, unchanged, at the output directory.
//
// Layout contract:
//   input  — VIDEO.json in MAKEFUN_BOT_DIR    (the repo root locally, /bot in the grader)
//   output — VIDEO.json in MAKEFUN_OUTPUT_DIR (./out locally, /output in the grader)
// Success is silent and deterministic: the same VIDEO.json in, the same
// bytes out, on every run — the harness runs this program twice and expects
// identical output. Any failure to read or write the file exits non-zero
// with the reason on stderr, so a broken entry fails loudly instead of
// scoring a stale or empty address.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

mkdirSync(outputDir, { recursive: true });

// A plain byte copy — no parsing, no reformatting — so the grader reads
// exactly the address the repository was submitted with.
try {
  copyFileSync(sourcePath, targetPath);
} catch (cause) {
  const detail = cause instanceof Error ? cause.message : String(cause);
  console.error("clipper entry: cannot copy VIDEO.json (" + sourcePath + " -> " + targetPath + "): " + detail);
  process.exit(1);
}
