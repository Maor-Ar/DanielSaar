import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const hoverLift = {
  rest: { scale: 1, boxShadow: "0 4px 4px rgba(0,0,0,0.25)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 24px rgba(15,23,42,0.12)",
    transition: { duration: 0.2 },
  },
};

export const hoverButton = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};
