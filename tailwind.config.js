/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "ui-sans-serif", "system-ui"],
      },

      colors: {
        primary: "#6967FB",
        secondary: "#C8F904",
        // tertiary: "#6967FB",
        // accent: "#8D96A0",
        dark: "#0E1A1F",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
