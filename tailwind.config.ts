import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, #FEFEFE 0%, #FCF2ED 100%)",
        "radial-gradient-100":
          "radial-gradient(circle, #FEFDFD 12%, #96FFA0 100%)",
        "radial-gradient-90":
          "radial-gradient(circle, #FEFDFD 1%, #C4FF96 100%)",
        "radial-gradient-80":
          "radial-gradient(circle, #FEFDFD 12%, #FFE896 100%)",
        "radial-gradient-70":
          "radial-gradient(circle, #FEFDFD 12%, #FFC896 100%)",
        "radial-gradient-60":
          "radial-gradient(circle, #FEFDFD 12%, #FF9696 100%)",
        "radial-gradient-0":
          "radial-gradient(circle, rgba(229, 226, 225, var(--tw-bg-opacity, 0.8)) 12%, rgba(139, 139, 139, var(--tw-bg-opacity, 0.8)) 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pottaOne: ["Potta One", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
