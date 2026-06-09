import { MotionFade } from "@/components/MotionFade";
import { StoryCardsMobileCarousel } from "@/components/StoryCardsMobileCarousel";
import { BusinessStoryCard, PersonalStoryCard } from "@/components/sections/StoryCards";

export function StoryChoiceSection() {
  return (
    <MotionFade>
      <section aria-labelledby="story-choice-title" className="bg-white px-4 pb-24 pt-12 sm:px-8 lg:px-[100px] lg:pb-[200px] lg:pt-[50px]">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center gap-10 lg:gap-20">
          <div className="flex flex-col items-center gap-3 text-center lg:gap-3">
            <h2 id="story-choice-title" className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-[80px]">
              מה הסיפור שלך?
            </h2>
            <p className="text-2xl font-semibold text-[#6f747f] sm:text-3xl lg:text-[40px] lg:tracking-wide">סיפור עסקי או אישי</p>
          </div>
          <div className="hidden w-full items-stretch justify-center gap-6 lg:flex">
            <BusinessStoryCard />
            <PersonalStoryCard />
          </div>
          <div className="w-full max-w-[360px] lg:hidden">
            <StoryCardsMobileCarousel>
              <BusinessStoryCard />
              <PersonalStoryCard />
            </StoryCardsMobileCarousel>
          </div>
        </div>
      </section>
    </MotionFade>
  );
}
