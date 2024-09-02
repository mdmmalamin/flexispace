/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "ui-sans-serif", "system-ui"],
      },

      colors: {
        primary: "#5285E8",
        secondary: "#BBFB4C",
        tertiary: "#FF6F61",
        accent: "#6B7280",
        dark: "#181818",
        light: "#f0f5f4",
      },
    },
  },
  plugins: [],
};
