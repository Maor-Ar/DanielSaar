import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        surface: "var(--surface)",
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "Assistant", "system-ui", "sans-serif"],
      },
      screens: {
        about: "1135px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
      maxWidth: {
        site: "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
