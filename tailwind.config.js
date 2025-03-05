/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#1E1E1E',
        'primary-text': '#E0E0E0',
        'secondary-text': '#B0B0B0',
        'accent': '#BB86FC',
        'cta': '#03DAC6',
        'error': '#CF6679',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
