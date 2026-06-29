import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function AboutSection() {
  return (
    <MotionFade>
      <section aria-labelledby="about-heading" className="flex justify-center px-4 py-16 sm:px-6 about:px-10 about:py-24">
        <div className="w-full max-w-[1820px] rounded-[30px] bg-slate-500/10 px-4 py-16 sm:px-6 about:bg-[#f1f1f2] about:p-0">
          <div className="about:rounded-[30px] about:bg-slate-500/10 about:py-40">
            <div className="mx-auto flex w-full max-w-[993px] flex-col-reverse items-center gap-12 about:flex-row about:items-center about:gap-20">
              <div className="flex w-full max-w-2xl min-w-0 flex-col items-end gap-10 text-right sm:mx-auto about:order-2 about:mx-0 about:max-w-none about:flex-1 about:gap-[60px]">
                <div className="flex w-full flex-col items-stretch gap-4 text-right">
                  <p className="text-xl font-semibold tracking-wide text-slate-900/70">הסיפור שלי</p>
                  <h2 id="about-heading" className="w-full text-3xl font-semibold text-slate-900 about:text-[42px]">
                    דניאל סער
                  </h2>
                  <p className="w-full text-lg leading-10 text-slate-900/70 about:text-[22px]">
                    היכולת לזקק סיפור למהות שלו- היא המקצוע שלי. עם רקע מקצועי בכתיבת תסריטים, לימודי כתיבה בסם שפיגל ונסיון בבניית אסטרטגיית תוכן לעסקים, בחרתי להפוך זיכרונות, חוויות וסיפורים לתוכן אסטתי ומדויק. בין אם זה בניית מותג או כתיבת מורשת משפחתית, אני כאן כדי לתת לסיפור שלכם קול ומשמעות
                  </p>
                </div>
                <div className="flex w-full flex-col items-center gap-10 about:flex-row about:items-center about:gap-20">
                  <div className="order-1 flex flex-col items-center gap-1 about:order-2">
                    <p className="text-4xl font-bold text-[#e98c00] about:text-[50px]">7</p>
                    <p className="text-sm text-slate-900/60">שנות ניסיון</p>
                  </div>
                  <div dir="ltr" className="order-2 flex items-center justify-center about:order-1 about:w-full about:max-w-md about:flex-1 about:gap-2">
                    <img src={figma.laurelLeft.mobile} alt="" className="h-[86px] w-[49px] shrink-0 object-contain about:hidden" />
                    <img src={figma.laurelLeft.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 object-contain about:block" />
                    <div dir="rtl" className="flex w-[182px] shrink-0 flex-col items-center gap-0.5 text-center text-slate-900 about:w-[316px] about:text-base">
                      <p className="flex h-[27px] items-center justify-center text-base font-semibold leading-normal tracking-[0.16px] about:h-auto about:whitespace-nowrap">
                        כתיבה מבוססת הצלחה
                      </p>
                      <div className="text-base font-normal leading-normal tracking-[0.16px] about:hidden">
                        <p>תסריט עלילתי פרי עטי, </p>
                        <p>שזכה לתמיכת קרנות קולנוע, </p>
                        <p>הופק כסרט קולנוע באורך מלא</p>
                      </div>
                      <p className="hidden text-base font-normal leading-normal tracking-[0.16px] about:block">
                        תסריט עלילתי פרי עטי, שזכה לתמיכת קרנות קולנוע,
                        <br />
                        הופק כסרט קולנוע באורך מלא
                      </p>
                    </div>
                    <img src={figma.laurelRight.mobile} alt="" className="h-[86px] w-[49px] shrink-0 -scale-y-100 rotate-180 object-contain about:hidden" />
                    <img src={figma.laurelRight.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 -scale-y-100 rotate-180 object-contain about:block" />
                  </div>
                </div>
              </div>
              <div className="relative mx-auto h-[328px] w-[269px] shrink-0 overflow-hidden rounded-[20px] about:order-1 about:mx-0">
                <ResponsiveFigmaPicture asset={figma.aboutPortrait} alt="דניאל סער" width={269} height={328} className="h-full w-full [&_img]:object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
