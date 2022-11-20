/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(16, 92, 78)',
          200: 'rgb(154, 222, 205)'
        },
        light: {
          100: 'rgb(247, 248, 249)',
          200: 'rgb(255, 255, 255)'
        },
        dark: {
          100: 'rgb(26, 27, 29)',
          200: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}
