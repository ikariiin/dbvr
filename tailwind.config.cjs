/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        beaver: {
          50: "#fbfbfa",
          100: "#f5f1f4",
          200: "#e9dae6",
          300: "#ceb4c8",
          400: "#b488a3",
          500: "#976481",
          600: "#7b4861",
          700: "#5c3648",
          800: "#3e2430",
          900: "#24161d",
        },
      },
    },
    fontFamily: {},
    gridTemplateColumns: {
      "auth-layout": "3fr 2fr",
    },
  },
  plugins: [typography],
};
