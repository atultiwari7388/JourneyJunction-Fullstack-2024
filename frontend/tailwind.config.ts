import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#FF9800",
        accent: "#FFC107",
        bg: "#F5F5F5",
        text: "#212121",
        error: "#EF4444",
        success: "#22C55E",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
