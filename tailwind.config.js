/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#fcfcfd",
          text: "#0f172a",
          muted: "#64748b",
          brand: "#0f172a",
          card: "#ffffff",
          border: "#e5e7eb"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06), 0 2px 8px rgba(0,0,0,.05)"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
