import { MotionFade } from "@/components/MotionFade";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";
import { figma } from "@/lib/figma-assets";

const waBusiness = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_URL ?? "https://wa.me/";
const waPersonal = process.env.NEXT_PUBLIC_WHATSAPP_PERSONAL_URL ?? "https://wa.me/";

export function HeroSection() {
  return (
    <MotionFade eager>
      <section aria-labelledby="hero-heading" className="flex justify-center px-4 pb-12 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <div className="w-full max-w-[1820px] rounded-[30px] bg-[#f1f1f2]">
          <div className="rounded-[30px] bg-slate-500/10 py-16 sm:py-24 lg:py-[200px]">
            <div className="mx-auto flex max-w-[1060px] flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:justify-around lg:gap-14">
              <div className="flex w-full max-w-xl flex-col items-start gap-10 px-2 sm:px-0 lg:order-2 lg:w-auto lg:max-w-[420px] lg:gap-9">
                <div className="flex w-full flex-col items-start gap-5 pl-4 pr-2 sm:pl-0 sm:pr-0">
                  <div className="relative h-[64px] w-[234px] shrink-0">
                    <ResponsiveFigmaPicture
                      asset={figma.heroTitle}
                      alt=""
                      width={234}
                      height={64}
                      className="[&_img]:object-contain"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start gap-2.5 text-right">
                    <h1 id="hero-heading" className="w-full text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-[34px]">
                      סטוריטלינג עסקי ואישי
                    </h1>
                    <p className="w-full text-xl text-slate-900 sm:text-xl lg:max-w-[400px] lg:text-2xl">
                      כתיבה, עריכה ותכנון תוכן עבור עסקים
                      <br className="sm:hidden" />
                      <span className="hidden sm:inline"> </span>
                      ואנשים פרטיים
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-row flex-nowrap items-center gap-2.5">
                  <AnimatedButton
                    href={waBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg bg-[#e98c00] px-3 py-3 text-center text-sm font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)] sm:px-5 sm:text-[17px]"
                  >
                    <span>ספרו לי על העסק שלכם</span>
                    <span className="relative inline-block size-5 shrink-0" aria-hidden>
                      <picture>
                        <source media="(min-width: 1024px)" srcSet={figma.waSolid.desktop} />
                        <img src={figma.waSolid.mobile} alt="" width={20} height={20} className="size-5" />
                      </picture>
                    </span>
                  </AnimatedButton>
                  <AnimatedButton
                    href={waPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg border border-slate-900 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:px-5 sm:text-[17px]"
                  >
                    <span>ספרו לי את הסיפור שלכם</span>
                    <span className="relative inline-block size-5 shrink-0" aria-hidden>
                      <picture>
                        <source media="(min-width: 1024px)" srcSet={figma.waOutline.desktop} />
                        <img src={figma.waOutline.mobile} alt="" width={20} height={20} className="size-5" />
                      </picture>
                    </span>
                  </AnimatedButton>
                </div>
           
              </div>
              <div className="relative h-[287px] w-[192px] shrink-0 overflow-hidden rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:h-[360px] sm:w-56 lg:order-1 lg:h-[430px] lg:w-[287px]">
                <ResponsiveFigmaPicture
                  asset={figma.heroPortrait}
                  alt="דניאל סער"
                  width={287}
                  height={430}
                  priority
                  className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
