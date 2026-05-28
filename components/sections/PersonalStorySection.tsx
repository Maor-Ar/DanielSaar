import { MotionFade } from "@/components/MotionFade";
import { figma } from "@/lib/figma-assets";
import { AnimatedButton } from "@/components/AnimatedButton";
import { BookCoverCarousel } from "@/components/BookCoverCarousel";

const waPersonal = process.env.NEXT_PUBLIC_WHATSAPP_PERSONAL_URL ?? "https://wa.me/";

const steps = [
  { n: "04", title: "הוצאה לאור", body: "בקרת איכות סופית ושליחת הספר להדפסה מקצועית בכמות העותקים שתבחרו" },
  { n: "03", title: "כתיבת הסיפור", body: "בניית שלד הסיפור, כתיבת הטקסט ועיצוב הספר תוך שילוב התמונות והמסמכים שסיפקתם תוך ליטוש משותף של הפרטים עד לתוצאה המדויקת לכם" },
  { n: "02", title: "סדרת מפגשי תוכן", body: "קיום ראיונות עומק אישיים לזיקוק רגעי המפתח בסיפור שלכם" },
  { n: "01", title: "אפיון ואיסוף חומרים", body: "פגישת היכרות איתכם ועם הסיפור שלכם ואיסוף חומרים רלוונטים" },
];

export function PersonalStorySection() {
  return (
    <MotionFade>
      <section id="personal-story" aria-labelledby="personal-heading" className="bg-white px-4 pb-24 pt-16 sm:px-8 lg:px-40 lg:pb-[310px] lg:pt-[100px]">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center gap-20 lg:gap-40">
          <div className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
            <div className="flex w-full max-w-xl flex-col items-end gap-8 text-right lg:order-2 lg:max-w-[626px] lg:gap-12">
              <div className="flex flex-col items-end gap-5">
                <span className="rounded-full border border-[#262c3a] bg-[#f6d199] px-4 py-1.5 text-[15px] font-semibold text-slate-900">אישי</span>
                <h2 id="personal-heading" className="text-3xl font-bold leading-tight text-slate-900 lg:text-[42px]">
                  <span className="lg:block">כתיבת</span> סיפור אישי
                </h2>
              </div>
              <p className="text-lg font-semibold text-[#6f747f] lg:text-[22px]">
                אני מגבשת את הזיכרונות שלכם לספר מרגש שמתעד את המורשת המשפחתית מתוך אמונה שלכל אדם יש סיפור ששווה לספר
              </p>
              <div className="relative h-px w-full max-w-md">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={figma.checklistPersonal.desktop} />
                  <img src={figma.checklistPersonal.mobile} alt="" className="h-full w-full object-contain" />
                </picture>
              </div>
              <ul className="flex list-disc flex-col gap-2.5 pe-7 text-lg font-semibold text-slate-900">
                <li>מתנה מרגשת ומשמעותית לימי הולדת עגולים להורים (60,70,80)</li>
                <li>מתנה ייחודית לאירועי חיים- חתונות, בר/בת מצווה ועוד</li>
                <li>מורשת והנצחה, תיעוד וסיפור של יקירכם כנס משפחתי לדורות</li>
              </ul>
              <AnimatedButton
                href={waPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#e98c00] px-5 py-3 text-lg font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
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
            <div className="w-full lg:order-1 lg:shrink-0">
              <BookCoverCarousel />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 lg:flex-row lg:flex-nowrap lg:justify-center lg:gap-[71px]">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex flex-col gap-1.5 rounded-lg bg-white p-4 text-right shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 lg:w-[310px]"
              >
                <p className="text-5xl font-bold text-[#e98c00] lg:text-[60px]">.{s.n}</p>
                <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">{s.title}</h3>
                <p className="text-base leading-7 text-slate-900 lg:text-lg">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
