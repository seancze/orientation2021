module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Courgette"],
        "magic-primary": ["Halloween Bold Grunge"],
        "magic-secondary": ["Sunday Regular"],
      },
      colors: {
        "primary-dark": "#410C0C",
        "primary-red": "#ff0000",
      },
      padding: {
        50: "12.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
