"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hoverButton } from "@/lib/motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
};

export function AnimatedButton({ children, className, href, target, rel }: Props) {
  const reduce = useReducedMotion();
  const linkProps = { href, target, rel, className };

  if (reduce) {
    return <a {...linkProps}>{children}</a>;
  }

  return (
    <motion.a {...linkProps} variants={hoverButton} initial="rest" whileHover="hover" whileTap="tap">
      {children}
    </motion.a>
  );
}
