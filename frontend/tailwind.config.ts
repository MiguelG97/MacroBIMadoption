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
        primary: { 100: "#f73f37" },
        secondary: { 100: "#343434 " },
        tertiary: { 100: "#4318FF" },
        quaternary: { 100: "#337ea9", 200: "#87a8c3", 300: "#bdbebc" },
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
      boxShadow: {
        light: "4px 4px 12px 0px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
