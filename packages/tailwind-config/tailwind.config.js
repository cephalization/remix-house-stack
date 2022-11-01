const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./pages/**/*.{ts,tsx,js,jsx,html}",
    "./components/**/*.{ts,tsx,js,jsx,html}",
    "./app/**/*.{ts,tsx,js,jsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
