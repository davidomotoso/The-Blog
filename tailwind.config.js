/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./The-Blog/src/Blog/******/*js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        32: "repeat(2,32.5%)",
      },
      screens: {
        mobile: "300px",
      },
    },
  },
  plugins: [],
};
