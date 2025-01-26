/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coffe: {
          50: "#e8d6d8",
          200: "#C89F94",
          400: "#A25f4d",
          600: "#744838",
        },
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": "url('./img/slider-bg.jpg')",
      },
    },
  },
  plugins: [],
};
