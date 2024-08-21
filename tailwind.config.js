/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#FFFBF3',
        'custom-accent': '#FFA800',
        'custom-secondary': '#E89058',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '1000': '1000',
      },
    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
  ],
}