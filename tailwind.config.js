const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        japanese: ["Noto Sans JP"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
