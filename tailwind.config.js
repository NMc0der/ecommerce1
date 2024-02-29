/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('./assets/retail_shopping_3.29.jpg')",
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        lobster: ["Lobster", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
    },
  },
  plugins: [],
};
