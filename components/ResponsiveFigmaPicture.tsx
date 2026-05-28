import Image from "next/image";
import type { ResponsiveFigma } from "@/lib/figma-assets";

type Props = {
  asset: ResponsiveFigma;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width: number;
  height: number;
};

/** Serves mobile vs desktop Figma exports for closer pixel match per breakpoint. */
export function ResponsiveFigmaPicture({
  asset,
  alt,
  className,
  sizes = "(max-width: 1023px) 100vw, 50vw",
  priority,
  width,
  height,
}: Props) {
  const mobileExt = asset.mobile.split(".").pop();
  const isSvg = mobileExt === "svg";

  if (isSvg) {
    return (
      <picture className={className}>
        <source media="(min-width: 1024px)" srcSet={asset.desktop} />
        <img src={asset.mobile} alt={alt} className="h-auto w-full" width={width} height={height} loading={priority ? "eager" : "lazy"} />
      </picture>
    );
  }

  return (
    <picture className={className}>
      <source media="(min-width: 1024px)" srcSet={asset.desktop} />
      <Image
        src={asset.mobile}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </picture>
  );
}
