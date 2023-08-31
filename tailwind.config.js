/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#89ced8",
        secondary: "#796ee8",
        dark: "#242424",
        light: "#fff",
      },
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"],
        sen: ["Sen", "sans-serif"],
      },
    },
  },
  plugins: [],
};
