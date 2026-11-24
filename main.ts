// How Many Tabs Do You Have Open? — Neon FINAL line, typed verbatim by the build worker.
// Writes the entry line to the grader's output dir as entry.txt (exactly the line,
// no trailing newline, UTF-8). Single-number format: no beats, scene, or aftermath.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "2638";

// Grader sets $MAKEFUN_OUTPUT_DIR; fall back to /output, then ./output.
// Never write under the read-only repo dir; never remove the grader's /output.
const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./output"].filter(Boolean);
let wrote = false;
for (const dir of candidates) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
    wrote = true;
    break;
  } catch {
    // try the next candidate
  }
}
if (!wrote) throw new Error("could not write entry.txt to any output dir");
