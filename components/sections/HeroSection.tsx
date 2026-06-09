import { MotionFade } from "@/components/MotionFade";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";
import { figma } from "@/lib/figma-assets";
import { WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/whatsapp";

const waHero = whatsappUrl(WHATSAPP_MESSAGES.hero);

/** Hero — desktop: 8855:13232; mobile: 8766:13652 (8px inner card padding) */
export function HeroSection() {
  return (
    <MotionFade eager>
      <section aria-labelledby="hero-heading" className="flex justify-center px-4 pb-12 pt-4 sm:px-6 lg:px-10 lg:pb-24">
        <div className="w-full max-w-[1820px] rounded-[30px] bg-[#e4e4e6] lg:bg-[#f1f1f2]">
          <div className="rounded-[30px] px-2 py-[90px] lg:bg-slate-500/10 lg:px-0 lg:py-[200px]">
            <div className="mx-auto flex max-w-[838px] flex-col items-center gap-20 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
              {/* Portrait — top on mobile, right on desktop RTL */}
              <div className="relative h-[287px] w-[192px] shrink-0 overflow-hidden rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:h-[430px] lg:w-[287px]">
                <ResponsiveFigmaPicture
                  asset={figma.heroPortrait}
                  alt="דניאל סער"
                  width={287}
                  height={430}
                  priority
                  className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
                />
              </div>

              {/* Text + CTA — right-aligned; 60px gap to button on mobile, 40px on desktop */}
              <div className="flex w-full flex-col items-end gap-[60px] lg:max-w-[471px] lg:gap-10">
                <div className="flex w-full flex-col items-center gap-5">
                  <div className="relative h-[64px] w-[234px] shrink-0">
                    <ResponsiveFigmaPicture
                      asset={figma.heroTitle}
                      alt=""
                      width={234}
                      height={64}
                      className="[&_img]:object-contain"
                    />
                  </div>
                  <div className="flex w-full flex-col items-center gap-2.5 text-center">
                    <h1 id="hero-heading" className="w-full text-[34px] font-semibold text-slate-900">
                      סטוריטלינג עסקי ואישי
                    </h1>
                    <p className="w-full text-2xl text-slate-900">
                      כתיבה, עריכה ותכנון תוכן עבור עסקים ואנשים פרטיים
                    </p>
                  </div>
                </div>

                <AnimatedButton
                  href={waHero}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ליצירת קשר בוואטסאפ"
                  className="inline-flex h-12 w-[85%] self-center items-center justify-center gap-1 rounded-lg bg-[#e98c00] px-5 py-3 text-center text-lg font-semibold text-white shadow-[0px_4px_2px_rgba(0,0,0,0.25)] lg:w-full lg:max-w-[462px] lg:self-auto"
                >
                  <span>ליצירת קשר בוואטסאפ</span>
                  <img src={figma.waHeroButton} alt="" width={24} height={24} className="size-6 shrink-0" aria-hidden />
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
