/**
 * One-off download of Figma MCP asset URLs into public/figma/
 * Run: node scripts/download-figma-assets.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public", "figma");

const urls = [
  // Desktop frame assets
  "https://www.figma.com/api/mcp/asset/a3b31bc3-fb5c-4df4-bf1e-1f58c80dbfa6",
  "https://www.figma.com/api/mcp/asset/6312a868-1fd6-4b1f-b3b9-dcbdb4cccc21",
  "https://www.figma.com/api/mcp/asset/b03a2d19-2bfc-44ef-b076-0db74ad7700d",
  "https://www.figma.com/api/mcp/asset/60d2178b-3518-4380-989f-49f9d4ea74ec",
  "https://www.figma.com/api/mcp/asset/651483e9-2e2a-44e1-afcc-438ade1f0e03",
  "https://www.figma.com/api/mcp/asset/d6bcf63b-b0fe-4f70-a554-b90b34e902ed",
  "https://www.figma.com/api/mcp/asset/0bf30423-f131-4821-ba0e-3ff467a7fcdb",
  "https://www.figma.com/api/mcp/asset/411f046f-4104-44e8-a194-bc7ce77ade6d",
  "https://www.figma.com/api/mcp/asset/8b316a10-7052-4e16-ad42-9f85ec8301b5",
  "https://www.figma.com/api/mcp/asset/20ee701e-de17-4a52-b881-0a4d69de9846",
  "https://www.figma.com/api/mcp/asset/59e80a54-451d-4d92-8fc2-44dbb75ec4da",
  "https://www.figma.com/api/mcp/asset/9466fc25-379e-42e8-8890-e613b163709a",
  "https://www.figma.com/api/mcp/asset/e562f9ba-32cb-487f-abc6-eacba6f604e5",
  "https://www.figma.com/api/mcp/asset/c94fee70-6cf0-42c0-94b7-6e6c2d6911dd",
  "https://www.figma.com/api/mcp/asset/53d7a12f-88a0-44a4-9afa-19618900c2ba",
  "https://www.figma.com/api/mcp/asset/42ad87a1-733a-4933-afe5-10e87cce2640",
  "https://www.figma.com/api/mcp/asset/d422b0a5-9b2b-46c2-affd-ae34c4eca97a",
  "https://www.figma.com/api/mcp/asset/8d8af443-49f6-475f-8b42-77678794bbc1",
  "https://www.figma.com/api/mcp/asset/337879f3-eb90-4ec8-b42d-c3739e8ffcc5",
  "https://www.figma.com/api/mcp/asset/e1ee4f6b-4c9b-44ae-acda-42c39fa7fc61",
  "https://www.figma.com/api/mcp/asset/42a3cfcd-7126-4561-892e-d747040c18fa",
  "https://www.figma.com/api/mcp/asset/692ef82b-007b-4e20-94af-287576a9fd5a",
  "https://www.figma.com/api/mcp/asset/21fc6cf5-e066-4294-ae1a-cb42c858853c",
  "https://www.figma.com/api/mcp/asset/1c4f3f60-c4a9-4bc2-9c44-ea29d2777ee6",
  "https://www.figma.com/api/mcp/asset/7a0d8bc7-de9a-4c25-b08b-dc6639669cfd",
  "https://www.figma.com/api/mcp/asset/2837d726-091c-4ac6-9da4-24b4fbcaac08",
  "https://www.figma.com/api/mcp/asset/93de48ac-aa04-48bf-8a56-91a7741e6903",
  "https://www.figma.com/api/mcp/asset/aecdb4f3-5f77-479e-9dfe-58dd9a39aacf",
  "https://www.figma.com/api/mcp/asset/bfc1a7fa-1c19-4f8b-b0fc-13e42cd12cc1",
  // Mobile frame assets (additional / alternate exports)
  "https://www.figma.com/api/mcp/asset/ec5bc50d-9e07-4673-bbd7-2e92d7bf9577",
  "https://www.figma.com/api/mcp/asset/71ff1037-3ee2-4dab-ac3a-b3f022ba4dfb",
  "https://www.figma.com/api/mcp/asset/2fd6fcb7-f90d-4956-8596-a677234303d5",
  "https://www.figma.com/api/mcp/asset/5aa696c7-71ae-4694-8308-bf7160a09b66",
  "https://www.figma.com/api/mcp/asset/3707f9f8-f6e6-43a3-b021-c2033971be14",
  "https://www.figma.com/api/mcp/asset/91c95415-3079-445f-b9d5-099008b017c8",
  "https://www.figma.com/api/mcp/asset/b0f2850f-e1fb-41a8-abc1-6c7c0f72aa76",
  "https://www.figma.com/api/mcp/asset/995841c4-13ea-451f-8b9c-1618a05079ed",
  "https://www.figma.com/api/mcp/asset/6aa5d505-a6db-4cd8-aa4d-7ba3ea0dd2e1",
  "https://www.figma.com/api/mcp/asset/e5b0fc73-b2f4-4a9a-a763-3a6df9ab6ee7",
  "https://www.figma.com/api/mcp/asset/b1b3d7ab-ed44-43b2-adb2-98e4f8fd5210",
  "https://www.figma.com/api/mcp/asset/76f73a39-097a-47e6-9c21-99bb29f8bf28",
  "https://www.figma.com/api/mcp/asset/3b0d5ea9-eaef-4f3f-90ba-3648074e37ac",
  "https://www.figma.com/api/mcp/asset/a7cde406-3417-4552-9944-909289649ae8",
  "https://www.figma.com/api/mcp/asset/2432fec3-9c66-4c39-8014-28ff985b3044",
  "https://www.figma.com/api/mcp/asset/c1671573-6dab-4369-acb7-8c204a19e33c",
  "https://www.figma.com/api/mcp/asset/fab98275-5a44-4b32-9bfc-fec7c6cdbd7a",
  "https://www.figma.com/api/mcp/asset/91291ce8-ab43-42c3-a0cc-3811398c5788",
  "https://www.figma.com/api/mcp/asset/764fbaed-7c2b-433e-bea8-8fa9ed979f52",
  "https://www.figma.com/api/mcp/asset/5f36014e-f229-46d6-9045-d8aaf096afc7",
  "https://www.figma.com/api/mcp/asset/e761c714-c2d2-49ae-951d-bbbb89a8b620",
  "https://www.figma.com/api/mcp/asset/ad84a5a0-d672-4225-a57f-6277fa7702c4",
  "https://www.figma.com/api/mcp/asset/3161e338-2a3f-415d-bf7e-7be01c8a0ce9",
  "https://www.figma.com/api/mcp/asset/11f8b14a-d513-4402-9f3c-205cd7eeffa6",
  "https://www.figma.com/api/mcp/asset/2e050ecb-e37d-4493-b8cd-484e36343b20",
  "https://www.figma.com/api/mcp/asset/848915d3-d4c1-4731-aa1a-7d65bf07bb0a",
];

function extFromBuffer(buf) {
  if (buf.length >= 4 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47)
    return "png";
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (buf.length >= 4 && buf[0] === 0x3c && buf[1] === 0x3f && buf[2] === 0x78 && buf[3] === 0x6d) return "svg";
  return "bin";
}

function fileNameFromUrl(url, ext) {
  const id = url.split("/").pop();
  return `${id}.${ext}`;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  let ok = 0;
  for (const url of urls) {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("FAIL", url, res.status);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = extFromBuffer(buf);
    const name = fileNameFromUrl(url, ext);
    const dest = join(outDir, name);
    await writeFile(dest, buf);
    ok++;
    console.log("OK", name, ext, buf.length);
  }
  console.log("Downloaded", ok, "/", urls.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
