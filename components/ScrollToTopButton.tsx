"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/icons/ChevronUpIcon";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="fixed bottom-6 left-6 z-[60] flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-xl text-[#e98c00] shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="חזרה לראש העמוד"
    >
      <ChevronUpIcon className="size-5 text-[#e98c00]" />
    </button>
  );
}
