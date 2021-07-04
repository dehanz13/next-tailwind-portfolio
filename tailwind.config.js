module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: {
          light: "#DEE2EC",
          default: "#9499A2",
        },
      },
      borderWidth: {
        "3/2": "1.5px",
      },
      maxWidth: {
        "5/2xl": "45rem",
      },
      transitionProperty: {
        navbar: "height, background",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
