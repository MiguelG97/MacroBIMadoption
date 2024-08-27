/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./core/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#f37f72" },
        secondary: { 100: "#444444" },
        tertiary: { 100: "#87a8c3" },
        quaternary: { 100: "#4318FF" },
        bgneutral: {
          100: "#f4f4f4",
          200: "#f4f7fe",
        },
        disabled: { 100: "#b5b7bc" }, //rgba(0,0,0,0.26)
        txcolor: {
          100: "black",
          200: "#2B3674",
          300: "#707EAE",
          400: "#A3AED0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
