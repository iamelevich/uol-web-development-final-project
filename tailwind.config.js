/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    hljs: {
      theme: 'night-owl',
    },
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs'),
    require('@tailwindcss/forms'),
  ],
};
