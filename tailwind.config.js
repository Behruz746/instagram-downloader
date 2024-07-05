/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        dark: "#000000",
        linearBlue: "linear-gradient(104deg, #521CED 21.06%, #4A25B5 80.12%)",
      },
      fontFamily: {
        allerta: ["Allerta"],
        arial: ["Arial, Helvetica, sans-serif"],
      },
    },
    screens: {
      // classslarda shu px lardan katta bolsa stylelar o'zgaradi
      xl: "1700px",
      lg: "1200px",
      md: "1060px",
      sm: "768px",
      ss: "620px",
      xs: "480px",
    },
  },
  plugins: [],
};
