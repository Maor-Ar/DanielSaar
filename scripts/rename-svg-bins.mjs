import { readdir, readFile, rename } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "..", "public", "figma");

for (const name of await readdir(dir)) {
  if (!name.endsWith(".bin")) continue;
  const p = join(dir, name);
  const buf = await readFile(p);
  const head = buf.toString("utf8", 0, Math.min(256, buf.length)).trimStart();
  if (head.startsWith("<")) {
    const dest = p.replace(/\.bin$/, ".svg");
    await rename(p, dest);
    console.log("renamed", name, "->", dest.split(/[/\\]/).pop());
  }
}
