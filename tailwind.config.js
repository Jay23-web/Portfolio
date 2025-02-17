/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlack: "#0F172A",
        softWhite: "#F8FAFC",
        vibrantBlue: "#3B82F6",
        customBlue: 'rgb(20, 52, 163)'
      }
    },
  },
  plugins: [],
}
