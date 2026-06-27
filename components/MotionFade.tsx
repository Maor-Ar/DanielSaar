"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useA11yReducedMotion } from "@/lib/use-a11y-reduced-motion";

export function MotionFade({
  children,
  className,
  /** Above-the-fold blocks: animate on mount instead of waiting for scroll. */
  eager = false,
}: {
  children: React.ReactNode;
  className?: string;
  eager?: boolean;
}) {
  const reduce = useA11yReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      // Visible in HTML without JS; whileInView still fades in on capable browsers.
      initial={false}
      animate={eager ? "show" : undefined}
      whileInView={eager ? undefined : "show"}
      viewport={eager ? undefined : { once: true, margin: "-48px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
