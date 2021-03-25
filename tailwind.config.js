module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/public/images/background.jpeg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
