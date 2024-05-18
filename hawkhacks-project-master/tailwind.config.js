// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Custom primary color
        darkBackground: '#1a1a1a', // Custom dark background color
        darkText: '#e5e5e5', // Custom dark text color
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
}
