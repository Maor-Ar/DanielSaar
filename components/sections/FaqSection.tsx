"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import { figma } from "@/lib/figma-assets";
import { useA11yReducedMotion } from "@/lib/use-a11y-reduced-motion";

const faqs = [
  {
    q: "מה מקבלים בסיום כתיבת סיפור אישי?",
    a: "ספר חיים אישי ומעוצב, המזקק את סיפורכם או את האירוע שעברתם לכדי יצירה אחת שלמה",
  },
  {
    q: "מה מקבלים בסיום תהליך כתיבת תוכן לעסקים?",
    a: "שפת מותג ברורה וכתיבה לכל הפורמטים הנדרשים (אתרים, אפליקציות, קורסים ועוד) עם ליווי מלא עד לתוצר אסתטי ומבדל",
  },
  {
    q: "כמה זה עולה?",
    a: "כל פרויקט מתומחר באופן אישי בהתאם להיקף ועומק העבודה. לאחר שיחה ראשונית ללא התחייבות תקבלו הצעת מחיר מדויקת",
  },
  {
    q: "איך אני אדע שאני מתחבר לכתיבה שלך?",
    a: "אפשר להסתכל על דוגמאות הכתיבה שלי באתר ולבקש ממני דוגמאות נוספות כדי להתרשם מהסגנון. מעבר לכך, הכתיבה שלי אינה קבועה והיא מותאמת לכל לקוח באופן אישי, אחרי שיחת היכרות מעמיקה",
  },
];

export function FaqSection() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const reduceMotion = useA11yReducedMotion();

  return (
    <section aria-labelledby="faq-heading" className="bg-white px-4 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="mb-10 text-center text-4xl font-bold text-slate-900">
          שאלות תשובות
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-btn-${i}`;
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-t border-[#f6d199] pt-2 first:border-t-0 first:pt-0">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start justify-end gap-4 py-3 text-right text-lg font-semibold text-slate-900 transition-colors hover:text-[#e98c00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e98c00]"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="mt-0.5 shrink-0">
                      <img src={figma.plusCircle.desktop} alt="" width={24} height={24} className={`transition-transform ${isOpen ? "rotate-45" : ""}`} />
                    </span>
                    <span className="flex-1">{item.q}</span>
                  </button>
                </h3>
                {reduceMotion ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    hidden={!isOpen}
                    className="text-right text-base leading-8 text-slate-900"
                  >
                    <p className="pb-4 pt-1">{item.a}</p>
                  </div>
                ) : (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden text-right text-base leading-8 text-slate-900"
                  >
                    <p className="pb-4 pt-1">{item.a}</p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
