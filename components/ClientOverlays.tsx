"use client";

import { useEffect, useState } from "react";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

/** Avoid hydration mismatch from browser-injected DOM attributes. */
export function ClientOverlays() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <AccessibilityMenu />
      <ScrollToTopButton />
    </>
  );
}
