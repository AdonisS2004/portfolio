import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "landing-image": "url('../../../public/assets/other/website-background-1.jpg')"
      },
      colors: {
      },
      fontFamily: {
        customInter: ["Inter", "sans-serif"],
        customFraunces: ["Fraunces", "serif"],
        customSpartan: ["League Spartan", "sans-serif"],
      },
      dropShadow: {
        'logo' : "0 4px 6px rgba(255, 255, 255, 1)",
        "landing": "-2px 2px 6px rgba(255, 255, 255, 1)",
      }
    },
  },
  plugins: [],
};
export default config;
