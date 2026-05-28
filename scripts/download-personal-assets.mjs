import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "figma");

const assets = [
  { url: "https://www.figma.com/api/mcp/asset/9043b44b-8d14-4bc7-9d98-b8503473938b", name: "book-carousel-wood" },
  { url: "https://www.figma.com/api/mcp/asset/6d6ea900-05ae-4a6e-a4ad-cefed762b941", name: "book-carousel-wood-mobile" },
  { url: "https://www.figma.com/api/mcp/asset/e067b493-049b-4d95-b91c-70aa504e3ebb", name: "book-carousel-dots-desktop" },
  { url: "https://www.figma.com/api/mcp/asset/01df4b05-766f-4260-9093-7ea9dba5a61d", name: "book-carousel-dots-mobile" },
  { url: "https://www.figma.com/api/mcp/asset/5c84483a-6ae1-4a65-80cb-2571757ea11d", name: "book-carousel-divider" },
];

function extFromBuffer(buf) {
  if (buf[0] === 0x89) return "png";
  if (buf[0] === 0xff) return "jpg";
  if (buf[0] === 0x3c) return "svg";
  return "png";
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const { url, name } of assets) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = extFromBuffer(buf);
    const dest = join(outDir, `${name}.${ext}`);
    await writeFile(dest, buf);
    console.log("OK", dest, buf.length);
  }
}

main();
