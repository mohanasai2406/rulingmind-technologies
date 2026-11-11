import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#081725", brand: "#1f6bff", teal: "#12b5b0", ink: "#142131", muted: "#68788a", soft: "#f3f6f9" },
      fontFamily: {
        sans: ["var(--font-dm)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
