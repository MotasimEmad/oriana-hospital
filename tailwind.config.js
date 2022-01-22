module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#05564d",
        secondray: "#aa8c4c"
      },
       fontFamily: {
        'roboto': ['Roboto'],
        'tajawal': ['Tajawal']
      },
    },
  },
  plugins: [],
}
