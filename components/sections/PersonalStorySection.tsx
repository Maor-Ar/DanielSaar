import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { AnimatedButton } from "@/components/AnimatedButton";
import { BookCoverCarousel } from "@/components/BookCoverCarousel";
import { ProcessStepCards } from "@/components/ProcessStepCards";

import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const waPersonal = whatsappUrl(WHATSAPP_MESSAGES.personal);

const steps = [
  { n: "01", title: "אפיון ואיסוף חומרים", body: "פגישת היכרות איתכם ועם הסיפור שלכם ואיסוף חומרים רלוונטים" },
  { n: "02", title: "סדרת מפגשי תוכן", body: "קיום ראיונות עומק אישיים לזיקוק רגעי המפתח בסיפור שלכם" },
  {
    n: "03",
    title: "כתיבת הסיפור",
    body: "בניית שלד הסיפור, כתיבת הטקסט ועיצוב הספר בשילוב התמונות והמסמכים שסיפקתם וליטוש מדויק של הפרטים יחד איתכם עד לתוצר הסופי",
  },
  { n: "04", title: "הוצאה לאור", body: "בקרת איכות סופית ושליחת הספר להדפסה מקצועית בכמות העותקים שתבחרו" },
];

const bullets = [
  "מתנה מרגשת ומשמעותית לימי הולדת עגולים להורים (60,70,80)",
  "מתנה ייחודית לאירועי חיים- חתונות, בר/בת מצווה ועוד",
  { full: "מורשת והנצחה, תיעוד וסיפור של יקירכם כנס משפחתי לדורות", short: "מורשת והנצחה" },
];

export function PersonalStorySection() {
  return (
    <MotionFade>
      <section id="personal-story" aria-labelledby="personal-heading" className="bg-white px-4 pb-24 pt-16 sm:px-8 lg:px-16 xl:px-40 lg:pb-[310px] lg:pt-[100px]">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center gap-20 lg:gap-40">
          <div className="grid w-full grid-cols-1 items-center gap-12 sm:max-w-[370px] sm:justify-items-center md:max-w-none md:grid-cols-1 md:justify-items-stretch lg:grid-cols-[minmax(0,742px)_minmax(280px,628px)] lg:items-start lg:justify-center lg:gap-x-8 lg:gap-y-12 xl:gap-x-20">
            <div className="relative order-2 w-full min-w-0 max-w-[742px] justify-self-center lg:justify-self-end">
              <BookCoverCarousel />
            </div>

            <div className="order-1 flex w-full max-w-[300px] flex-col items-start gap-8 justify-self-center text-right sm:max-w-[370px] lg:max-w-[628px] lg:justify-self-start lg:gap-12">
              <div className="flex w-full flex-col items-start gap-5">
                <span className="rounded-full border border-[#262c3a] px-4 py-1.5 text-[15px] font-semibold text-slate-900">
                  אישי
                </span>
                <h2 id="personal-heading" className="whitespace-pre-wrap text-3xl font-bold leading-tight text-slate-900 lg:text-[42px]">
                  <span>כתיבת{"\n"}</span>
                  <span>סיפור אישי</span>
                </h2>
              </div>
              <p className="w-full text-lg font-semibold leading-normal text-[#6f747f] lg:text-[22px]">
                אני מגבשת את הזיכרונות שלכם לספר מרגש שמתעד את המורשת המשפחתית מתוך אמונה שלכל אדם יש סיפור ששווה לספר
              </p>

              <div className="relative h-px w-full max-w-[157px] lg:max-w-[464px]">
                <img src={figma.bookCarouselDivider} alt="" className="h-full w-full object-contain" aria-hidden />
              </div>

              <ul className="flex w-full list-disc flex-col gap-2.5 ps-7 text-lg font-semibold text-slate-900 marker:text-slate-900">
                {bullets.map((item) => (
                  <li key={typeof item === "string" ? item : item.full}>
                    <span className="max-lg:inline lg:hidden">{typeof item === "string" ? item : item.short}</span>
                    <span className="hidden lg:inline">{typeof item === "string" ? item : item.full}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton
                href={waPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-lg bg-[#e98c00] px-5 py-3 text-lg font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
              >
                ספרו לי את הסיפור שלכם
                <span className="inline-block size-5 shrink-0" aria-hidden>
                  <picture>
                    <source media="(min-width: 1024px)" srcSet={figma.waSolid.desktop} />
                    <img src={figma.waSolid.mobile} alt="" width={20} height={20} className="size-5" />
                  </picture>
                </span>
              </AnimatedButton>
            </div>
          </div>

          <ProcessStepCards steps={steps} />
        </div>
      </section>
    </MotionFade>
  );
}
