import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function AboutSection() {
  return (
    <MotionFade>
      <section
        aria-labelledby="about-heading"
        className="flex justify-center bg-slate-500/10 px-[max(10px,min(340px,calc((100%-993px)/2)))] py-16 lg:rounded-[30px] lg:py-24 min-[1014px]:py-40"
      >
        <div className="mx-auto flex w-full max-w-[993px] flex-col-reverse items-center gap-12 lg:items-stretch min-[1014px]:flex-row min-[1014px]:items-center min-[1014px]:gap-20">
          <div className="flex w-full max-w-2xl min-w-0 flex-col items-end gap-10 text-right sm:mx-auto lg:mx-0 lg:max-w-none min-[1014px]:order-2 min-[1014px]:flex-1 min-[1014px]:gap-[60px]">
            <div className="flex w-full flex-col items-stretch gap-4 text-right">
              <p className="text-xl font-semibold tracking-wide text-slate-900/70">הסיפור שלי</p>
              <h2 id="about-heading" className="w-full text-3xl font-semibold text-slate-900 min-[1014px]:text-[42px]">
                דניאל סער
              </h2>
              <p className="w-full text-lg leading-10 text-slate-900/70 min-[1014px]:text-[22px]">
                היכולת לזקק סיפור למהות שלו- היא המקצוע שלי. עם רקע מקצועי בכתיבת תסריטים, לימודי כתיבה בסם שפיגל ונסיון בבניית אסטרטגיית תוכן לעסקים, בחרתי להפוך זיכרונות, חוויות וסיפורים לתוכן אסטתי ומדויק. בין אם זה בניית מותג או כתיבת מורשת משפחתית, אני כאן כדי לתת לסיפור שלכם קול ומשמעות
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-10 min-[1014px]:flex-row min-[1014px]:items-center min-[1014px]:justify-between min-[1014px]:gap-20">
              <div className="order-1 flex flex-col items-center gap-1 min-[1014px]:order-2">
                <p className="text-4xl font-bold text-[#e98c00] min-[1014px]:text-[50px]">7</p>
                <p className="text-sm text-slate-900/60">שנות ניסיון</p>
              </div>
              <div className="order-2 flex items-center justify-center min-[1014px]:order-1 min-[1014px]:w-full min-[1014px]:max-w-md min-[1014px]:flex-1 min-[1014px]:flex-row-reverse min-[1014px]:gap-2">
                <img src={figma.laurelLeft.mobile} alt="" className="h-[86px] w-[49px] shrink-0 object-contain min-[1014px]:hidden" />
                <img src={figma.laurelLeft.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 object-contain min-[1014px]:block" />
                <div className="flex w-[182px] shrink-0 flex-col items-center text-center text-slate-900 min-[1014px]:w-auto min-[1014px]:gap-1 min-[1014px]:text-base">
                  <p className="flex h-[27px] items-center justify-center text-base font-semibold leading-normal tracking-[0.16px] min-[1014px]:h-auto">
                    כתיבה מבוססת הצלחה
                  </p>
                  <div className="text-base font-normal leading-normal tracking-[0.16px] min-[1014px]:hidden">
                    <p>תסריט עלילתי פרי עטי, </p>
                    <p>שזכה לתמיכת קרנות קולנוע, </p>
                    <p>הופק כסרט קולנוע באורך מלא</p>
                  </div>
                  <p className="hidden font-normal min-[1014px]:block">
                    תסריט עלילתי פרי עטי, שזכה לתמיכת קרנות קולנוע, הופק כסרט קולנוע באורך מלא
                  </p>
                </div>
                <img src={figma.laurelRight.mobile} alt="" className="h-[86px] w-[49px] shrink-0 -scale-y-100 rotate-180 object-contain min-[1014px]:hidden" />
                <img src={figma.laurelRight.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 -scale-y-100 rotate-180 object-contain min-[1014px]:block" />
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[328px] w-[269px] shrink-0 overflow-hidden rounded-[20px] min-[1014px]:order-1 min-[1014px]:mx-0">
            <ResponsiveFigmaPicture asset={figma.aboutPortrait} alt="דניאל סער" width={269} height={328} className="h-full w-full [&_img]:object-cover" />
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
