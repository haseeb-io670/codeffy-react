/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#1A1A1A',
        'dark-grey': '#2D2D2D',
        'light-grey': '#4A4A4A',
        'silver': '#E0E0E0',
        'mustard': '#FFD700',
        'mustard-dark': '#D4AF37',
      },
    },
  },
  plugins: [],
}
