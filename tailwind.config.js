module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      iphone: { raw: '(min-height: 568px)' },
      xxs: '280px',
      xs: '360px',
      sm: '375px',
    },
    extend: {},
  },
  plugins: [],
};
