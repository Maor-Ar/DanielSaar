"use client";

import { useEffect, useState } from "react";
import { AccessibilityIsaIcon } from "@/components/icons/AccessibilityIsaIcon";

const LS = {
  font: "a11y-font-scale",
  contrast: "a11y-high-contrast",
  motion: "a11y-reduce-motion",
  underline: "a11y-underline-links",
} as const;

function read(key: string) {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function applyHtml() {
  const root = document.documentElement;
  const font = read(LS.font);
  const contrast = read(LS.contrast);
  const motion = read(LS.motion);
  const underline = read(LS.underline);
  root.dataset.fontScale = font === "large" ? "large" : "normal";
  root.dataset.highContrast = contrast === "true" ? "true" : "false";
  root.dataset.reduceMotion = motion === "true" ? "true" : "false";
  root.dataset.underlineLinks = underline === "true" ? "true" : "false";
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [fontLarge, setFontLarge] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [underline, setUnderline] = useState(false);

  useEffect(() => {
    setFontLarge(read(LS.font) === "large");
    setHighContrast(read(LS.contrast) === "true");
    setReduceMotion(read(LS.motion) === "true");
    setUnderline(read(LS.underline) === "true");
    applyHtml();
  }, []);

  useEffect(() => {
    applyHtml();
  }, [fontLarge, highContrast, reduceMotion, underline]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-6 right-6 z-[60] size-12 overflow-hidden rounded-full border border-slate-300 bg-white p-0.5 shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="תפריט נגישות"
      >
        <AccessibilityIsaIcon className="block size-full rounded-full" />
      </button>
      {open ? (
        <div
          id="a11y-panel"
          role="dialog"
          aria-modal="true"
          aria-label="הגדרות נגישות"
          className="fixed bottom-20 right-6 z-[60] w-[min(320px,calc(100vw-3rem))] rounded-xl border border-slate-200 bg-white p-4 shadow-2xl"
        >
          <div className="flex flex-col gap-3 text-right text-sm text-slate-900">
            <label className="flex items-center justify-between gap-2">
              <span>הגדלת טקסט</span>
              <input
                type="checkbox"
                checked={fontLarge}
                onChange={(e) => {
                  const v = e.target.checked;
                  setFontLarge(v);
                  write(LS.font, v ? "large" : "normal");
                }}
              />
            </label>
            <label className="flex items-center justify-between gap-2">
              <span>ניגודיות גבוהה</span>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={(e) => {
                  const v = e.target.checked;
                  setHighContrast(v);
                  write(LS.contrast, v ? "true" : "false");
                }}
              />
            </label>
            <label className="flex items-center justify-between gap-2">
              <span>הפחתת תנועה</span>
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={(e) => {
                  const v = e.target.checked;
                  setReduceMotion(v);
                  write(LS.motion, v ? "true" : "false");
                }}
              />
            </label>
            <label className="flex items-center justify-between gap-2">
              <span>קו תחתון לקישורים</span>
              <input
                type="checkbox"
                checked={underline}
                onChange={(e) => {
                  const v = e.target.checked;
                  setUnderline(v);
                  write(LS.underline, v ? "true" : "false");
                }}
              />
            </label>
            <button type="button" className="mt-2 rounded-lg bg-slate-100 py-2 font-semibold" onClick={() => setOpen(false)}>
              סגירה
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
