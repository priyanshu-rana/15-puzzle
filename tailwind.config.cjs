/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        320: "320px",
      },
    },
  },
  plugins: [],
};
