import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function AboutSection() {
  return (
    <MotionFade>
      <section
        aria-labelledby="about-heading"
        className="flex justify-center bg-slate-500/10 px-4 py-16 sm:px-8 lg:rounded-[30px] lg:px-10 lg:py-24 xl:px-[340px] xl:py-40"
      >
        <div className="mx-auto flex w-full max-w-[1820px] flex-col-reverse items-center gap-12 lg:items-stretch xl:flex-row xl:items-center xl:gap-20">
          <div className="flex w-full max-w-2xl min-w-0 flex-col items-end gap-10 text-right sm:mx-auto lg:mx-0 lg:max-w-none xl:order-2 xl:flex-1 xl:gap-[60px]">
            <div className="flex w-full flex-col items-stretch gap-4 text-right">
              <p className="text-xl font-semibold tracking-wide text-slate-900/70">הסיפור שלי</p>
              <h2 id="about-heading" className="w-full text-3xl font-semibold text-slate-900 xl:text-[42px]">
                דניאל סער
              </h2>
              <p className="w-full text-lg leading-10 text-slate-900/70 xl:text-[22px]">
                היכולת לזקק סיפור למהות שלו- היא המקצוע שלי. עם רקע מקצועי בכתיבת תסריטים, לימודי כתיבה בסם שפיגל ונסיון בבניית אסטרטגיית תוכן לעסקים, בחרתי להפוך זיכרונות, חוויות וסיפורים לתוכן אסטתי ומדויק. בין אם זה בניית מותג או כתיבת מורשת משפחתית, אני כאן כדי לתת לסיפור שלכם קול ומשמעות
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-20">
              <div className="order-2 flex flex-col items-center gap-1">
                <p className="text-4xl font-bold text-[#e98c00] xl:text-[50px]">7</p>
                <p className="text-sm text-slate-900/60">שנות ניסיון</p>
              </div>
              <div className="order-1 flex w-full max-w-md flex-row-reverse items-center justify-center gap-2 xl:flex-1">
                <img src={figma.laurelLeft.mobile} alt="" className="h-16 w-8 shrink-0 object-contain xl:hidden" />
                <img src={figma.laurelLeft.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 object-contain xl:block" />
                <div className="flex flex-col items-center gap-1 text-center text-sm text-slate-900 xl:text-base">
                  <p className="font-semibold">כתיבה מבוססת הצלחה</p>
                  <p>תסריט עלילתי פרי עטי, שזכה לתמיכת קרנות קולנוע, הופק כסרט קולנוע שייצא בקרוב לאקרנים</p>
                </div>
                <img src={figma.laurelRight.mobile} alt="" className="h-16 w-8 shrink-0 scale-y-[-1] rotate-180 object-contain xl:hidden" />
                <img src={figma.laurelRight.desktop} alt="" className="hidden h-[86px] w-[49px] shrink-0 scale-y-[-1] rotate-180 object-contain xl:block" />
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-[328px] w-[269px] shrink-0 overflow-hidden rounded-[20px] xl:order-1 xl:mx-0">
            <ResponsiveFigmaPicture asset={figma.aboutPortrait} alt="דניאל סער" width={269} height={328} className="h-full w-full [&_img]:object-cover" />
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
