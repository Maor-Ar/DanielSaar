"use client";

import { useState } from "react";
import type { LegalDocument } from "@/content/legal/types";
import { accessibilityStatementDocument } from "@/content/legal/accessibility-statement.he";
import { privacyPolicyDocument } from "@/content/legal/privacy-policy.he";
import { LegalDocumentModal } from "@/components/LegalDocumentModal";

export function FooterLegalLinks() {
  const [openDocument, setOpenDocument] = useState<LegalDocument | null>(null);

  return (
    <>
      <nav aria-label="מסמכים משפטיים">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start">
          <li>
            <button
              type="button"
              onClick={() => setOpenDocument(privacyPolicyDocument)}
              className="text-xs text-slate-900/70 underline-offset-2 transition-colors hover:text-slate-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
            >
              מדיניות פרטיות
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setOpenDocument(accessibilityStatementDocument)}
              className="text-xs text-slate-900/70 underline-offset-2 transition-colors hover:text-slate-900 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
            >
              הצהרת נגישות
            </button>
          </li>
        </ul>
      </nav>
      <LegalDocumentModal document={openDocument} onClose={() => setOpenDocument(null)} />
    </>
  );
}
