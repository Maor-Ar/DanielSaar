import { MotionFade } from "@/components/MotionFade";

import { figma } from "@/lib/figma-assets";

import { AnimatedButton } from "@/components/AnimatedButton";
import { BeforeAfterCarousel } from "@/components/BeforeAfterCarousel";
import { ProcessStepCards } from "@/components/ProcessStepCards";



import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const waBusiness = whatsappUrl(WHATSAPP_MESSAGES.business);



const steps = [

  { n: "01", title: "אפיון ומחקר", body: "למידת המותג, בפגישת היכרות איסוף חומרים, וביצוע מחקר אודות התחום" },

  { n: "02", title: "בניית הסיפור", body: "בניית שלד התוכן בין אם מאפס או עריכה ושדרוג תוכן קיים" },

  { n: "03", title: "גיבוש ודיוק", body: "ליווי התהליך במפגשי עדכון שוטפים, ביצוע התאמות נדרשות וזיקוק הטקסט עד להשגת דיוק מקסימלי" },

  { n: "04", title: "הטמעה ובקרה", body: "ליווי בתהליך העלאת התוכן לפלטפורמות הרלוונטיות, ביצוע בדיקות איכות והתאמה לעיצוב" },

];



export function BusinessContentSection() {

  return (

    <MotionFade>

      <section id="business-content" aria-labelledby="business-heading" className="border-b border-[#f6d199] bg-white px-4 pb-24 pt-16 sm:px-8 content:px-0 content:pb-[310px] content:pt-[100px]">

        <div className="mx-auto flex max-w-[1450px] flex-col items-center gap-20 content:gap-40">

          <div className="mx-auto grid w-full max-w-[370px] grid-cols-1 items-center gap-12 justify-items-center content:mx-0 content:max-w-none content:grid-cols-[minmax(0,742px)_minmax(280px,795px)] content:items-start content:justify-center content:gap-x-8 content:gap-y-12 xl:gap-x-20">

            <div className="relative order-2 w-full min-w-0 max-w-[370px] justify-self-center content:max-w-[795px] content:justify-self-end">
              <BeforeAfterCarousel />
            </div>



            <div className="order-1 flex w-full max-w-[300px] flex-col items-start gap-8 justify-self-center text-right sm:max-w-[370px] content:max-w-[628px] content:justify-self-start content:gap-12">

              <div className="flex w-full flex-col items-start gap-5">

                <span className="rounded-full border border-slate-900/90 px-4 py-1.5 text-[15px] font-semibold text-slate-900">לעסקים</span>

                <h2 id="business-heading" className="whitespace-pre-wrap text-3xl font-bold leading-tight text-slate-900 lg:text-[42px]">
                  <span>כתיבת תוכן</span>
                  {"\n"}
                  <span>לעסקים</span>
                </h2>

              </div>

              <p className="w-full text-lg font-semibold text-slate-900/60 lg:text-[22px]">
                אני בונה אסטרטגיית תוכן שיווקית שמבדלת אתכם בשוק,{" "}
                <br className="hidden content:inline" />
                תוך הבנת הסיפור הייחודי שלכם או של המוצר שלכם
           
              </p>

              <div className="relative h-5 w-full max-w-[157px] lg:max-w-[339px]">

                <picture>

                  <source media="(min-width: 1024px)" srcSet={figma.checklistBusiness.desktop} />

                  <img src={figma.checklistBusiness.mobile} alt="" className="h-full w-full object-contain" loading="lazy" decoding="async" />

                </picture>

              </div>

              <ul className="flex w-full list-disc flex-col gap-2.5 ps-7 text-lg font-semibold text-slate-900 marker:text-slate-900">

                <li>כתיבת תוכן לאתרים ולעמודי נחיתה</li>

                <li>כתיבת תסריטים לסרטונים וסושיאל</li>

                <li>כתיבה שיווקית</li>

              </ul>

              <AnimatedButton

                href={waBusiness}

                target="_blank"

                rel="noopener noreferrer"

                className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-lg px-5 py-3 text-lg font-semibold"

              >

                ספרו לי על העסק שלכם

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

