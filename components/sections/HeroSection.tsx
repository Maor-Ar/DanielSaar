import { MotionFade } from "@/components/MotionFade";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";
import { figma } from "@/lib/figma-assets";
import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const waHero = whatsappUrl(WHATSAPP_MESSAGES.hero);

/** Hero layout from Figma Website For Maor → Servics Title → 8855:13232 */
export function HeroSection() {
  return (
    <MotionFade eager>
      <section aria-labelledby="hero-heading" className="flex justify-center px-4 pb-12 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <div className="w-full max-w-[1820px] rounded-[30px] bg-[#f1f1f2]">
          <div className="rounded-[30px] bg-slate-500/10 py-16 sm:py-24 lg:py-[200px]">
            <div className="mx-auto flex max-w-[838px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
              {/* Portrait — right on desktop RTL */}
              <div className="relative h-[287px] w-[192px] shrink-0 overflow-hidden rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] sm:h-[360px] sm:w-56 lg:h-[430px] lg:w-[287px]">
                <ResponsiveFigmaPicture
                  asset={figma.heroPortrait}
                  alt="דניאל סער"
                  width={287}
                  height={430}
                  priority
                  className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
                />
              </div>

              {/* Text + CTA — 471px column, items-end (left edge in RTL) */}
              <div className="flex w-full max-w-[471px] flex-col items-end gap-10">
                <div className="flex w-full flex-col items-end gap-5">
                  <div className="relative h-[64px] w-[234px] shrink-0">
                    <ResponsiveFigmaPicture
                      asset={figma.heroTitle}
                      alt=""
                      width={234}
                      height={64}
                      className="[&_img]:object-contain"
                    />
                  </div>
                  <div className="flex w-full flex-col items-end gap-2.5 text-right">
                    <h1 id="hero-heading" className="w-full text-[28px] font-semibold text-slate-900 sm:text-[32px] lg:text-[34px]">
                      סטוריטלינג עסקי ואישי
                    </h1>
                    <p className="w-full text-lg text-slate-900 sm:text-xl lg:text-2xl">
                      כתיבה, עריכה ותכנון תוכן עבור עסקים ואנשים פרטיים
                    </p>
                  </div>
                </div>

                <div className="flex w-full max-w-[462px] justify-end">
                  <AnimatedButton
                    href={waHero}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ליצירת קשר בוואטסאפ"
                    className="inline-flex h-12 w-full items-center justify-center gap-1 rounded-lg bg-[#e98c00] px-5 py-3 text-center text-lg font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
                  >
                    <span>ליצירת קשר בוואטסאפ</span>
                    <img src={figma.waHeroButton} alt="" width={24} height={24} className="size-6 shrink-0" aria-hidden />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
