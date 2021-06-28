module.exports = {
  purge: true,// explicitely disabled
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
     '12':'12px'
    },
    extend: {
      colors: {
        sea: {
          lightest: "#83c5be",
          light: "#00afb9",
          medium: "#3797a4",
          dark: "#006d77"
        }
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}