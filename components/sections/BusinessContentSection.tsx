import { MotionFade } from "@/components/MotionFade";

import { figma } from "@/lib/figma-assets";

import { AnimatedButton } from "@/components/AnimatedButton";



import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const waBusiness = whatsappUrl(WHATSAPP_MESSAGES.business);



const steps = [

  { n: "01", title: "אפיון ומחקר", body: "למידת המותג, בפגישת היכרות איסוף חומרים, וביצוע מחקר אודות התחום" },

  { n: "02", title: "בניית הסיפור", body: "בניית שלד התוכן בין אם מאפס או עריכה ושדרוג תוכן קיים" },

  { n: "03", title: "גיבוש ודיוק", body: "ליווי התהליך במפגשי עדכון שוטפים, ביצוע התאמות נדרשות וזיקוק הטקסט עד להשגת דיוק מקסימלי" },

  { n: "04", title: "הטמעה ובקרה", body: "ליווי בתהליך העלאת התוכן לפלטפורמות הרלוונטיות, ביצוע בדיקות איכות והתאמה לעיצוב" },

];



function BeforeAfterImage({

  asset,

  alt,

  className,

}: {

  asset: { mobile: string; desktop: string };

  alt: string;

  className: string;

}) {

  return (

    <>

      <img src={asset.mobile} alt={alt} className={`${className} lg:hidden`} />

      <img src={asset.desktop} alt={alt} className={`${className} hidden lg:block`} />

    </>

  );

}



export function BusinessContentSection() {

  return (

    <MotionFade>

      <section id="business-content" aria-labelledby="business-heading" className="border-b border-[#f6d199] bg-white px-4 pb-24 pt-16 sm:px-8 lg:px-16 xl:px-40 lg:pb-[310px] lg:pt-[100px]">

        <div className="mx-auto flex max-w-[1450px] flex-col items-center gap-20 lg:gap-40">

          <div className="grid w-full grid-cols-1 items-center gap-12 sm:max-w-[370px] sm:justify-items-center md:max-w-none md:grid-cols-1 md:justify-items-stretch lg:grid-cols-[minmax(0,742px)_minmax(280px,628px)] lg:items-start lg:justify-center lg:gap-x-8 lg:gap-y-12 xl:gap-x-20">

            <div className="relative order-2 w-full min-w-0 max-w-[742px] justify-self-center lg:justify-self-end">

              <div

                className="relative aspect-[370/282] w-full min-h-[220px] overflow-hidden rounded border border-slate-900/20 bg-white sm:min-h-[260px] lg:aspect-[742/552] lg:min-h-0"

                dir="ltr"

              >

                <div className="absolute inset-x-0 top-0 z-0 h-[35%] rounded-t bg-[rgba(217,217,217,0.4)]" aria-hidden />



                {/* אחרי — polished card (top-right) */}

                <div className="absolute left-[37.5%] top-[3.5%] z-10 h-[57%] w-[59.5%] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:left-[38%] lg:top-[1.5%] lg:h-[59%] lg:w-[60%]">

                  <BeforeAfterImage

                    asset={figma.beforeAfterAfter}

                    alt="אחרי — תוכן ממוקד"

                    className="h-full w-full object-cover object-top"

                  />

                </div>



                {/* לפני — page screenshot (bottom-left), cropped like Figma */}

                <div className="absolute bottom-[3%] left-[1.5%] z-20 h-[46.5%] w-[71%] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:bottom-[4%] lg:left-[2%] lg:h-[48%] lg:w-[71%]">

                  <div className="relative h-full w-full overflow-hidden">

                    <BeforeAfterImage

                      asset={figma.beforeAfterScreenshot}

                      alt="לפני — דוגמה לכתיבת תוכן"

                      className="absolute left-[-17%] top-[-0.1%] h-[134%] w-[117%] max-w-none object-cover"

                    />

                  </div>

                </div>



                <div className="absolute left-[14%] top-[10%] z-30 flex flex-col items-end gap-1 text-right lg:left-[18%] lg:top-[10%]">

                  <div className="flex items-center gap-2 text-[22px] text-slate-900 lg:text-[42px]">

                    <span>לפני</span>

                    <span className="inline-flex h-[22px] w-px items-center lg:h-[43px]">

                      <img src={figma.lineVertical.desktop} alt="" className="h-full w-full object-contain" />

                    </span>

                  </div>

                  <p className="text-[6px] leading-tight text-slate-900 sm:text-[8px] lg:text-xs">עומס מלל וחוסר מיקוד במסר</p>

                </div>



                <div className="absolute bottom-[16%] left-[72%] z-30 flex flex-col items-start gap-1 text-right lg:bottom-[20%] lg:left-[76%]">

                  <div className="flex items-center gap-2 text-[22px] text-slate-900 lg:text-[42px]">

                    <span className="inline-flex h-[22px] w-px items-center lg:h-[43px]">

                      <img src={figma.lineVertical.desktop} alt="" className="h-full w-full object-contain" />

                    </span>

                    <span>אחרי</span>

                  </div>

                  <p className="text-[6px] leading-tight text-slate-900 sm:text-[8px] lg:text-xs">תוכן נקי, קריא וממוקד</p>

                </div>

              </div>

            </div>



            <div className="order-1 flex w-full max-w-[300px] flex-col items-start gap-8 justify-self-center text-right sm:max-w-[370px] lg:max-w-[628px] lg:justify-self-start lg:gap-12">

              <div className="flex w-full flex-col items-start gap-5">

                <span className="rounded-full border border-slate-900/90 px-4 py-1.5 text-[15px] font-semibold text-slate-900">לעסקים</span>

                <h2 id="business-heading" className="text-3xl font-bold text-slate-900 lg:text-[42px]">

                  כתיבת תוכן לעסקים

                </h2>

              </div>

              <p className="w-full text-lg font-semibold text-slate-900/60 lg:text-[22px]">

                אני בונה אסטרטגיית תוכן שיווקית שמבדלת אתכם בשוק, תוך הבנת הסיפור הייחודי שלכם או של המוצר שלכם

              </p>

              <div className="relative h-5 w-full max-w-[339px]">

                <picture>

                  <source media="(min-width: 1024px)" srcSet={figma.checklistBusiness.desktop} />

                  <img src={figma.checklistBusiness.mobile} alt="" className="h-full w-full object-contain" />

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

                className="inline-flex shrink-0 items-center gap-2.5 self-start rounded-lg bg-[#e98c00] px-5 py-3 text-lg font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"

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



          <div className="flex w-full max-w-[312px] flex-col items-start gap-5 self-start sm:max-w-none lg:max-w-none lg:flex-row lg:flex-nowrap lg:items-stretch lg:justify-center lg:gap-[72px]">

            {steps.map((s) => (

              <div

                key={s.n}

                className="flex flex-col items-start gap-1.5 rounded-lg bg-white p-4 text-right shadow-[0px_4px_2px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 lg:w-[310px]"

              >

                <p className="w-full text-5xl font-bold text-[#e98c00] lg:text-[60px]">.{s.n}</p>

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

