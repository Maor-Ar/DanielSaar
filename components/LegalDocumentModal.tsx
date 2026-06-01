"use client";

import { useEffect, useId, useRef } from "react";
import type { LegalDocument } from "@/content/legal/types";
import { LegalDocumentBody } from "@/components/LegalDocumentBody";

type Props = {
  document: LegalDocument | null;
  onClose: () => void;
};

export function LegalDocumentModal({ document: legalDocument, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!legalDocument) return;

    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [legalDocument, onClose]);

  if (!legalDocument) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="סגירת חלון"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[min(85vh,800px)] w-full max-w-2xl flex-col rounded-xl border border-slate-200 bg-white shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="סגירה"
          className="absolute start-3 top-3 z-10 flex size-9 items-center justify-center rounded-lg text-2xl leading-none text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
        >
          <span aria-hidden>×</span>
        </button>
        <div className="overflow-y-auto overscroll-contain px-6 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14">
          <LegalDocumentBody document={legalDocument} titleId={titleId} />
        </div>
      </div>
    </div>
  );
}
