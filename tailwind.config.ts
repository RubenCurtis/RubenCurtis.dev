import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#0b1185",
      },
      height: {
        "h-1/3-screen": "33.33vh",
      },
      keyframes: {
        "slide-in-from-top-fast": {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-top-slow": {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-from-top-fast": "slide-in-from-top-fast 0.5s ease-out",
        "slide-in-from-top-slow": "slide-in-from-top-slow 1.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
