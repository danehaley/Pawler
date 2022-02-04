module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "nearly-full": "85vh",
        "half-full": "50vh",
      },
      boxShadow: {
        topMd:
          "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1);",
      },
      backdropBlur: {
        xs: "1px",
      },
      fontSize: {
        xxs: ".25rem",
      },
      width: { 128: "52rem" },
      colors: {
        hyperlink: "#0066CC",
        pawler: {
          primary: "#FCAC44",
          primaryHover: "#FB9D22",
        },
      },
    },
  },
  plugins: [],
};
