import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { StoryChoiceSection } from "@/components/sections/StoryChoiceSection";
import { BusinessContentSection } from "@/components/sections/BusinessContentSection";
import { PersonalStorySection } from "@/components/sections/PersonalStorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  const items = testimonials as Testimonial[];

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <StoryChoiceSection />
        <BusinessContentSection />
        <PersonalStorySection />
        <AboutSection />
        <TestimonialsSection items={items} />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
