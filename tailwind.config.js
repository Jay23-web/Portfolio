/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New palette
        // darkNavy: "#0B0C10",
        softGray: "#E5E7EB",
        // neonTeal: "#00F0FF",
        neonViolet: "#8A2BE2",
        // upgreded --
        neonTeal: "#14f7ff",   // proper aqua neon instead of green
        darkNavy: "#0d1117",   // background color
        accentTeal: "#06b6d4", // cyan-500 for buttons, hover states


        // Backward-compatible aliases so your old classes still work
        navyBlack: "#0B0C10",     // was #0F172A
        softWhite: "#E5E7EB",     // was #F8FAFC
      },
    },
  },
  plugins: [],
}
