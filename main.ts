// The 3 AM Commit Message: one bug fixed, three new ones shipped.
// The message goes to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const head = "Fixed the bug by introducing three new ones";
const tail = "production is a group project now.";

// Head plus tail, joined on an em dash.
function main(): void {
  const message = `${head} — ${tail}`;
  const n = message.length;
  if (n < 1 || n > 200) {
    throw new Error(`commit message is ${n} chars; the gate is 1-200`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), message, "utf8");
}

main();
