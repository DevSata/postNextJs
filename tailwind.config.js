/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "440px", max: "768px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1024px", max: "1280px" },
      xl: { min: "1280px" },
    },
    extend: {
      
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    //require("@tailwindcss/line-clamp"),
  ],
};
