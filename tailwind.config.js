module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
    },
    screens: {
      iphone: { raw: '(min-height: 568px)' },
      xxs: '280px',
      xs: '360px',
      sm: '375px',
      md: '768px'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
