/**
 * Resize and compress Figma raster assets to WebP based on on-screen display sizes.
 * Sources: assets/figma-original/  →  Output: public/figma/*.webp
 * Run: npm run optimize-images
 */
import { mkdir, readdir, stat, unlink } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const sourceDir = join(root, "assets", "figma-original");
const outDir = join(root, "public", "figma");

/** @type {Array<{ file: string; maxWidth: number; quality: number }>} */
const manifest = [
  // heroPortrait (LCP) — displayed max 287×430
  { file: "5cb9959b-563c-4de3-b197-26d6a07ee059.jpg", maxWidth: 574, quality: 82 },

  // aboutPortrait — displayed 269×328
  { file: "b0f2850f-e1fb-41a8-abc1-6c7c0f72aa76.jpg", maxWidth: 538, quality: 82 },
  { file: "0bf30423-f131-4821-ba0e-3ff467a7fcdb.jpg", maxWidth: 538, quality: 82 },

  // beforeAfterScreenshot — large container ~742×552
  { file: "5aa696c7-71ae-4694-8308-bf7160a09b66.png", maxWidth: 800, quality: 78 },
  { file: "651483e9-2e2a-44e1-afcc-438ade1f0e03.png", maxWidth: 1484, quality: 80 },

  // beforeAfterAfter — small overlay cards
  { file: "3707f9f8-f6e6-43a3-b021-c2033971be14.png", maxWidth: 400, quality: 80 },
  { file: "60d2178b-3518-4380-989f-49f9d4ea74ec.png", maxWidth: 800, quality: 80 },

  // bookCover carousel
  { file: "91c95415-3079-445f-b9d5-099008b017c8.png", maxWidth: 800, quality: 82 },
  { file: "d6bcf63b-b0fe-4f70-a554-b90b34e902ed.png", maxWidth: 1256, quality: 82 },

  // book carousel slides (single asset, size for desktop cap)
  { file: "book-slide-pages.png", maxWidth: 1256, quality: 80 },
  { file: "book-slide-back.png", maxWidth: 1256, quality: 80 },

  // story choice cards
  { file: "71ff1037-3ee2-4dab-ac3a-b3f022ba4dfb.png", maxWidth: 720, quality: 78 },
  { file: "6312a868-1fd6-4b1f-b3b9-dcbdb4cccc21.png", maxWidth: 1100, quality: 80 },
  { file: "2fd6fcb7-f90d-4956-8596-a677234303d5.png", maxWidth: 720, quality: 78 },
  { file: "b03a2d19-2bfc-44ef-b076-0db74ad7700d.png", maxWidth: 1100, quality: 80 },
];

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function optimizeOne({ file, maxWidth, quality }) {
  const srcPath = join(sourceDir, file);
  const stem = basename(file, extname(file));
  const outPath = join(outDir, `${stem}.webp`);

  let beforeBytes;
  try {
    beforeBytes = (await stat(srcPath)).size;
  } catch {
    console.warn(`  SKIP (source missing): ${file}`);
    return null;
  }

  const pipeline = sharp(srcPath).rotate();
  const meta = await pipeline.metadata();
  const resize =
    meta.width && meta.width > maxWidth ? { width: maxWidth, withoutEnlargement: true } : undefined;

  await mkdir(outDir, { recursive: true });
  await sharp(srcPath)
    .rotate()
    .resize(resize)
    .webp({ quality, effort: 6 })
    .toFile(outPath);

  const afterBytes = (await stat(outPath)).size;
  const oldPublicPath = join(outDir, file);
  try {
    await unlink(oldPublicPath);
  } catch {
    // original may already be removed
  }

  return {
    file,
    out: `${stem}.webp`,
    before: beforeBytes,
    after: afterBytes,
    dims: `${meta.width}×${meta.height}`,
  };
}

async function main() {
  console.log("Optimizing Figma raster assets → WebP\n");
  console.log(`Source: ${sourceDir}`);
  console.log(`Output: ${outDir}\n`);

  const results = [];
  for (const entry of manifest) {
    const result = await optimizeOne(entry);
    if (result) results.push(result);
  }

  console.log("File                                          Before      After     Saved");
  console.log("─".repeat(72));
  let totalBefore = 0;
  let totalAfter = 0;
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    const saved = ((1 - r.after / r.before) * 100).toFixed(0);
    const name = r.out.padEnd(44);
    console.log(`${name} ${formatKb(r.before).padStart(9)} ${formatKb(r.after).padStart(9)}  -${saved}%`);
  }
  console.log("─".repeat(72));
  console.log(`${"TOTAL".padEnd(44)} ${formatKb(totalBefore).padStart(9)} ${formatKb(totalAfter).padStart(9)}  -${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%`);

  const publicFiles = await readdir(outDir);
  const remainingRaster = publicFiles.filter((f) => /\.(png|jpe?g)$/i.test(f) && manifest.some((m) => m.file === f));
  if (remainingRaster.length) {
    console.warn("\nWarning: raster originals still in public/figma:", remainingRaster.join(", "));
  }

  console.log("\nDone. Update lib/figma-assets.ts paths to .webp if not already.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
