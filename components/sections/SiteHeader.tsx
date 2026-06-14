"use client";

import { useEffect, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

/** Pixels from top/bottom edge before the header fades out. */
const SCROLL_THRESHOLD = 64;

function isHeaderVisible() {
  const { scrollY, innerHeight } = window;
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  const scrolledPastTop = scrollY > SCROLL_THRESHOLD;
  const nearBottom = scrollY >= maxScroll - SCROLL_THRESHOLD;

  return scrolledPastTop && !nearBottom;
}

export function SiteHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(isHeaderVisible());
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <header
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
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
