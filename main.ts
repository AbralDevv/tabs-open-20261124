// tabs-open-20261124 — "How Many Tabs Do You Have Open?"
// Writes the entrant's honest open-tab count as digits only to entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1-5 characters, not only
// whitespace. The entry is a single number in digits, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const COUNT = "347";

// The entry must be exactly one number in digits, 1-5 characters.
// Fail loudly instead of writing an entry the gate would refuse.
if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error(`invalid tab count: ${JSON.stringify(COUNT)}`);
}

function outputDir(): string {
  const fromEnv = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim();
  if (fromEnv) return fromEnv;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "./output";
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), COUNT, "utf8");
}

main();
