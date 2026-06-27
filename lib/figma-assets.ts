import { withAssetPrefix } from "@/lib/base-path";

/** Local paths for exported Figma MCP assets (see scripts/download-figma-assets.mjs). */
const figmaAssets = {
  logo: { mobile: "/figma/995841c4-13ea-451f-8b9c-1618a05079ed.svg", desktop: "/figma/411f046f-4104-44e8-a194-bc7ce77ade6d.svg" },
  heroTitle: { mobile: "/figma/4a3181c5-9800-4e4f-ab0d-3f1da40b62a5.svg", desktop: "/figma/4a3181c5-9800-4e4f-ab0d-3f1da40b62a5.svg" },
  heroPortrait: { mobile: "/figma/5cb9959b-563c-4de3-b197-26d6a07ee059.webp", desktop: "/figma/5cb9959b-563c-4de3-b197-26d6a07ee059.webp" },
  waHeroButton: "/figma/7601bf28-be06-4252-880f-28d48fa0e07d.svg",
  cardPersonalTop: { mobile: "/figma/71ff1037-3ee2-4dab-ac3a-b3f022ba4dfb.webp", desktop: "/figma/6312a868-1fd6-4b1f-b3b9-dcbdb4cccc21.webp" },
  cardBusinessTop: { mobile: "/figma/2fd6fcb7-f90d-4956-8596-a677234303d5.webp", desktop: "/figma/b03a2d19-2bfc-44ef-b076-0db74ad7700d.webp" },
  beforeAfterComposite: "/figma/Group%201000005891.png",
  businessSlideBefore: "/figma/business-slide-before.png",
  businessSlideAfter: "/figma/business-slide-after.png",
  bookCover: { mobile: "/figma/91c95415-3079-445f-b9d5-099008b017c8.webp", desktop: "/figma/d6bcf63b-b0fe-4f70-a554-b90b34e902ed.webp" },
  bookSlidePages: "/figma/book-slide-pages.webp",
  bookSlideBack: "/figma/book-slide-back.webp",
  bookCarouselDivider: "/figma/book-carousel-divider.svg",
  aboutPortrait: { mobile: "/figma/b0f2850f-e1fb-41a8-abc1-6c7c0f72aa76.webp", desktop: "/figma/0bf30423-f131-4821-ba0e-3ff467a7fcdb.webp" },
  waOutline: { mobile: "/figma/e5b0fc73-b2f4-4a9a-a763-3a6df9ab6ee7.svg", desktop: "/figma/20ee701e-de17-4a52-b881-0a4d69de9846.svg" },
  waSolid: { mobile: "/figma/b1b3d7ab-ed44-43b2-adb2-98e4f8fd5210.svg", desktop: "/figma/59e80a54-451d-4d92-8fc2-44dbb75ec4da.svg" },
  iconPersonal1: { mobile: "/figma/76f73a39-097a-47e6-9c21-99bb29f8bf28.svg", desktop: "/figma/9466fc25-379e-42e8-8890-e613b163709a.svg" },
  iconPersonal2: { mobile: "/figma/3b0d5ea9-eaef-4f3f-90ba-3648074e37ac.svg", desktop: "/figma/e562f9ba-32cb-487f-abc6-eacba6f604e5.svg" },
  iconPersonal3: { mobile: "/figma/a7cde406-3417-4552-9944-909289649ae8.svg", desktop: "/figma/c94fee70-6cf0-42c0-94b7-6e6c2d6911dd.svg" },
  iconBusiness1: { mobile: "/figma/c1671573-6dab-4369-acb7-8c204a19e33c.svg", desktop: "/figma/42ad87a1-733a-4933-afe5-10e87cce2640.svg" },
  iconBusiness2: { mobile: "/figma/fab98275-5a44-4b32-9bfc-fec7c6cdbd7a.svg", desktop: "/figma/d422b0a5-9b2b-46c2-affd-ae34c4eca97a.svg" },
  iconBusiness3: { mobile: "/figma/91291ce8-ab43-42c3-a0cc-3811398c5788.svg", desktop: "/figma/8d8af443-49f6-475f-8b42-77678794bbc1.svg" },
  arrowLeft: { mobile: "/figma/2432fec3-9c66-4c39-8014-28ff985b3044.svg", desktop: "/figma/53d7a12f-88a0-44a4-9afa-19618900c2ba.svg" },
  arrowLeftOrange: { mobile: "/figma/764fbaed-7c2b-433e-bea8-8fa9ed979f52.svg", desktop: "/figma/337879f3-eb90-4ec8-b42d-c3739e8ffcc5.svg" },
  lineVertical: { mobile: "/figma/e761c714-c2d2-49ae-951d-bbbb89a8b620.svg", desktop: "/figma/e1ee4f6b-4c9b-44ae-acda-42c39fa7fc61.svg" },
  checklistBusiness: { mobile: "/figma/42a3cfcd-7126-4561-892e-d747040c18fa.svg", desktop: "/figma/42a3cfcd-7126-4561-892e-d747040c18fa.svg" },
  checklistPersonal: { mobile: "/figma/692ef82b-007b-4e20-94af-287576a9fd5a.svg", desktop: "/figma/692ef82b-007b-4e20-94af-287576a9fd5a.svg" },
  bookSubmark: { mobile: "/figma/ad84a5a0-d672-4225-a57f-6277fa7702c4.svg", desktop: "/figma/21fc6cf5-e066-4294-ae1a-cb42c858853c.svg" },
  laurelLeft: { mobile: "/figma/3161e338-2a3f-415d-bf7e-7be01c8a0ce9.svg", desktop: "/figma/1c4f3f60-c4a9-4bc2-9c44-ea29d2777ee6.svg" },
  laurelRight: { mobile: "/figma/11f8b14a-d513-4402-9f3c-205cd7eeffa6.svg", desktop: "/figma/7a0d8bc7-de9a-4c25-b08b-dc6639669cfd.svg" },
  quote: { mobile: "/figma/2e050ecb-e37d-4493-b8cd-484e36343b20.svg", desktop: "/figma/2837d726-091c-4ac6-9da4-24b4fbcaac08.svg" },
  linkOut: { mobile: "/figma/848915d3-d4c1-4731-aa1a-7d65bf07bb0a.svg", desktop: "/figma/93de48ac-aa04-48bf-8a56-91a7741e6903.svg" },
  plusCircle: { mobile: "/figma/bfc1a7fa-1c19-4f8b-b0fc-13e42cd12cc1.svg", desktop: "/figma/bfc1a7fa-1c19-4f8b-b0fc-13e42cd12cc1.svg" },
  line94: "/figma/5f36014e-f229-46d6-9045-d8aaf096afc7.svg",
} as const;

export const figma = withAssetPrefix(figmaAssets);

export type ResponsiveFigma = { mobile: string; desktop: string };
