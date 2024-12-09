import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          900: "#060607",
          800: "#23262A",
          700: "#2E3338",
          600: "#4F5660",
          500: "#747F8D",
          400: "#9099A4",
          300: "#C7CCD1",
          200: "#E3E5E8",
          100: "#F8F9F9"
        },
        "dark": {
          900: "#040405",
          800: "#18191C",
          700: "#202225",
          600: "#36393F",
          500: "#4F545C",
          400: "#72767D",
          300: "#B9BBBE",
          200: "#DCDDDE",
          100: "#F6F6F7"
        }
      }
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
