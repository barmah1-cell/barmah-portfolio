/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1e3a8a',
          navyDark: '#1e293b',
        },
        accent: {
          gold: '#f59e0b',
          teal: '#14b8a6',
        },
      },
    },
  },
  plugins: [],
}
