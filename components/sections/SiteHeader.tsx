import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1920px] items-center justify-start px-4 py-4 sm:px-10 lg:px-20 lg:py-[30px]">
        <div className="relative h-[34px] w-[138px] shrink-0">
          <ResponsiveFigmaPicture
            asset={figma.logo}
            alt="דניאל סער — לוגו"
            width={138}
            height={34}
            priority
            className="block h-full w-full [&_img]:object-contain"
          />
        </div>
      </div>
    </header>
  );
}
