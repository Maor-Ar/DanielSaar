import { figma } from "@/lib/figma-assets";
import { AnimatedButton } from "@/components/AnimatedButton";

function IconPair({ mobile, desktop }: { mobile: string; desktop: string }) {
  return (
    <span className="relative inline-block size-6 shrink-0" aria-hidden>
      <img src={mobile} alt="" className="absolute inset-0 size-6 lg:hidden" />
      <img src={desktop} alt="" className="absolute inset-0 hidden size-6 lg:block" />
    </span>
  );
}

export function PersonalStoryCard() {
  return (
    <article className="group flex max-w-[543px] flex-col overflow-hidden rounded-[20px] border border-slate-900/20 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0px_12px_28px_rgba(15,23,42,0.12)]">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-t-[20px] sm:h-[220px] lg:h-[255px]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={figma.cardPersonalTop.desktop} />
          <img src={figma.cardPersonalTop.mobile} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </picture>
        <div className="absolute bottom-4 right-4 rounded border border-slate-900 bg-white px-2.5 py-0.5">
          <span className="text-sm font-bold text-slate-900">אישי</span>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-white px-4 py-6 text-right sm:px-6 lg:min-h-[372px] lg:px-6 lg:pb-8 lg:pt-8">
        <div className="flex flex-col items-end gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 lg:text-[34px]">סיפור אישי</h3>
            <p className="mt-2 text-lg font-semibold text-slate-900/60 lg:text-2xl">הפיכת זיכרונות וחוויות חיים לספר כתוב</p>
          </div>
          <ul className="flex w-full flex-col gap-4">
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>שימור מורשת</span>
              <IconPair mobile={figma.iconPersonal1.mobile} desktop={figma.iconPersonal1.desktop} />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>מתנה משמעותית</span>
              <IconPair mobile={figma.iconPersonal2.mobile} desktop={figma.iconPersonal2.desktop} />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>ליווי קשוב</span>
              <IconPair mobile={figma.iconPersonal3.mobile} desktop={figma.iconPersonal3.desktop} />
            </li>
          </ul>
        </div>
        <AnimatedButton
          href="#personal-story"
          className="mx-auto inline-flex items-center gap-5 rounded-xl border border-slate-900 bg-white px-10 py-3.5 text-[15px] font-semibold text-slate-900 shadow-[0px_4px_2px_rgba(0,0,0,0.25)] lg:px-40"
        >
          <span className="inline-flex rotate-180">
            <img src={figma.arrowLeft.mobile} alt="" width={10} height={10} className="lg:hidden" />
            <img src={figma.arrowLeft.desktop} alt="" width={10} height={10} className="hidden lg:inline" />
          </span>
          לקרוא על זה עוד
        </AnimatedButton>
      </div>
    </article>
  );
}

export function BusinessStoryCard() {
  return (
    <article className="group flex max-w-[551px] flex-col overflow-hidden rounded-[20px] border border-slate-900/20 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0px_12px_28px_rgba(15,23,42,0.12)]">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-t-[20px] sm:h-[220px] lg:h-[255px]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={figma.cardBusinessTop.desktop} />
          <img src={figma.cardBusinessTop.mobile} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </picture>
        <div className="absolute bottom-4 right-4 rounded border border-white bg-[#e98c00] px-2.5 py-0.5">
          <span className="text-sm font-bold text-white">עסקי</span>
        </div>
      </div>
      <div className="relative flex flex-col gap-6 bg-white px-4 py-6 text-right sm:px-6 lg:min-h-[371px] lg:px-6 lg:pb-8 lg:pt-8">
        <p className="text-center text-[10px] text-slate-900/60 lg:absolute lg:left-1/2 lg:top-3 lg:-translate-x-1/2 lg:whitespace-nowrap">
          הלוגואים מוצגים להמחשת ניסיון בפרויקטים, כל הזכויות שמורות לבעליהם ללא קשר שותפות
        </p>
        <div className="flex flex-col items-end gap-6 lg:mt-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 lg:text-[34px]">סיפור עסקי</h3>
            <p className="mt-2 text-lg font-semibold text-slate-900/60 lg:text-2xl">בניית אסטרטגיית תוכן לעסקים</p>
          </div>
          <ul className="flex w-full flex-col gap-4">
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>בניית שפה מיתוגית אחידה</span>
              <IconPair mobile={figma.iconBusiness1.mobile} desktop={figma.iconBusiness1.desktop} />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>דיוק המסר העסקי</span>
              <IconPair mobile={figma.iconBusiness2.mobile} desktop={figma.iconBusiness2.desktop} />
            </li>
            <li className="flex items-center justify-end gap-4 text-base font-semibold text-slate-900">
              <span>התאמה לקהל היעד</span>
              <IconPair mobile={figma.iconBusiness3.mobile} desktop={figma.iconBusiness3.desktop} />
            </li>
          </ul>
        </div>
        <AnimatedButton
          href="#business-content"
          className="mx-auto inline-flex items-center gap-5 rounded-xl bg-[#e98c00] px-10 py-3.5 text-[15px] font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)] lg:px-40"
        >
          <span className="inline-flex rotate-180">
            <img src={figma.arrowLeftOrange.mobile} alt="" width={10} height={10} className="lg:hidden" />
            <img src={figma.arrowLeftOrange.desktop} alt="" width={10} height={10} className="hidden lg:inline" />
          </span>
          לקרוא על זה עוד
        </AnimatedButton>
      </div>
    </article>
  );
}
