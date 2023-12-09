/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "prim": '#008170',
        "sec": '#005B41',
        "ter": '#232D3F',
        'cuac': '#0F0F0F'
      }
    },
  },
  plugins: [],
}