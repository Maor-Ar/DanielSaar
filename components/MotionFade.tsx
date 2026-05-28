"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

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
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={eager ? "show" : undefined}
      whileInView={eager ? undefined : "show"}
      viewport={eager ? undefined : { once: true, margin: "-48px" }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
