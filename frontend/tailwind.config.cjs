/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Unga project structure-ku etha maathiri
    "./pages/**/*.{js,ts,jsx,tsx}",      // Idhayum serthukonga
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}