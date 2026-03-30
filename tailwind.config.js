/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712', // To'q fon rangi
        accent: {
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          green: '#10b981',
        }
      }
    },
  },
  plugins: [],
}