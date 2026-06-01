import { FooterLegalLinks } from "@/components/FooterLegalLinks";
import { figma } from "@/lib/figma-assets";
import { ResponsiveFigmaPicture } from "@/components/ResponsiveFigmaPicture";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-6 sm:flex-row-reverse">
        <div className="relative h-[34px] w-[138px] shrink-0">
          <ResponsiveFigmaPicture asset={figma.logo} alt="דניאל סער" width={138} height={34} className="[&_img]:object-contain" />
        </div>
        <FooterLegalLinks />
        {/* Social links hidden per spec — keep landmark for future use */}
        <nav aria-label="רשתות חברתיות" className="hidden" aria-hidden="true">
          <ul>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
