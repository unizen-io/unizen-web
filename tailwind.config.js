module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        unizenGray: '#dbdbdb'
      }
    },
    filter: { // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: { // defaults to {}
      none: 'none',
      blur: 'blur(20px)'
    }
  },
  variants: {
    extend: {},
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'] // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters')
  ],
  // TODO: should remove after completely dropping bootstrap
  important: true
}
