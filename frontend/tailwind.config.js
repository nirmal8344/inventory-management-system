/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}", // This will scan all your component and page files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}