import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function AboutSection() {
  return (
    <MotionFade>
      <section aria-labelledby="about-heading" className="flex justify-center bg-slate-500/10 px-4 py-16 sm:px-8 lg:rounded-[30px] lg:px-[340px] lg:py-40">
        <div className="mx-auto flex w-full max-w-[1820px] flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex w-full max-w-2xl flex-col items-end gap-10 text-right lg:order-2 lg:max-w-none lg:gap-[60px]">
            <div className="flex flex-col items-end gap-4">
              <p className="text-xl font-semibold tracking-wide text-slate-900/70">הסיפור שלי</p>
              <h2 id="about-heading" className="text-3xl font-semibold text-slate-900 lg:text-[42px]">
                דניאל סער
              </h2>
              <p className="text-lg leading-10 text-slate-900/70 lg:text-[22px]">
                היכולת לזקק סיפור למהות שלו- היא המקצוע שלי. עם רקע מקצועי בכתיבת תסריטים, לימודי כתיבה בסם שפיגל ונסיון בבניית אסטרטגיית תוכן לעסקים, בחרתי להפוך זיכרונות, חוויות וסיפורים לתוכן אסטתי ומדויק. בין אם זה בניית מותג או כתיבת מורשת משפחתית, אני כאן כדי לתת לסיפור שלכם קול ומשמעות
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-10 lg:justify-between lg:gap-20">
              <div className="flex flex-col items-center gap-1">
                <p className="text-4xl font-bold text-[#e98c00] lg:text-[50px]">7</p>
                <p className="text-sm text-slate-900/60">שנות ניסיון</p>
              </div>
              <div className="flex max-w-md flex-1 items-center justify-center gap-2">
                <img src={figma.laurelLeft.mobile} alt="" className="h-16 w-8 shrink-0 object-contain lg:hidden" />
                <img src={figma.laurelLeft.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 object-contain lg:block" />
                <div className="flex flex-col items-center gap-1 text-center text-sm text-slate-900 lg:text-base">
                  <p className="font-semibold">כתיבה מבוססת הצלחה</p>
                  <p>תסריט עלילתי פרי עטי, שזכה לתמיכת קרנות קולנוע, הופק כסרט קולנוע שייצא בקרוב לאקרנים</p>
                </div>
                <img src={figma.laurelRight.mobile} alt="" className="h-16 w-8 shrink-0 scale-y-[-1] rotate-180 object-contain lg:hidden" />
                <img src={figma.laurelRight.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 scale-y-[-1] rotate-180 object-contain lg:block" />
              </div>
            </div>
          </div>
          <div className="relative h-[328px] w-[269px] shrink-0 overflow-hidden rounded-[20px] lg:order-1">
            <ResponsiveFigmaPicture asset={figma.aboutPortrait} alt="דניאל סער" width={269} height={328} className="h-full w-full [&_img]:object-cover" />
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
