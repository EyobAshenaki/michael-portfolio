/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D9B07C',
        'brand-text': '#DB9035',
        accent: '#F2E5D9',
        'accent-2': '#FFFAF4',
      },
    },
  },
  plugins: [],
}
