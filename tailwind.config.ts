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
        "radial-gradient": "radial-gradient(circle, #FFDECF 0%, #FFEEEE 100%)",
        "radial-gradient-100":
          "radial-gradient(circle, #FFDECF 0%, #96FFA0 100%)",
        "radial-gradient-90":
          "radial-gradient(circle, #FFDECF 0%, #C4FF96 100%)",
        "radial-gradient-80":
          "radial-gradient(circle, #FFDECF 0%, #FFE896 100%)",
        "radial-gradient-70":
          "radial-gradient(circle, #FFDECF 0%, #FFC896 100%)",
        "radial-gradient-60":
          "radial-gradient(circle, #FFDECF 0%, #FF9696 100%)",
        "radial-gradient-0":
          "radial-gradient(circle, #E5E2E1 0%, #8B8B8B 100%)",
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
