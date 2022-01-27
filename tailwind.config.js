module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".25rem",
      },
      width: { 128: "52rem" },
      colors: {
        pawler: {
          primary: "#FCAC44",
          primaryHover: "#FB9D22",
        },
      },
    },
  },
  plugins: [],
};
