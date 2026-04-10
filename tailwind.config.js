/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow':      '#F2C12E',
        'brand-yellow-light':'#FFE07A',
        'brand-yellow-dark': '#D4A01A',
        'brand-green':       '#1E6B2F',
        'brand-green-light': '#E8F5EC',
        'brand-green-mid':   '#2F9B4A',
        'brand-green-dark':  '#145221',
        'brand-dark':        '#0D1A10',
        'brand-dark-mid':    '#1A2E1D',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
