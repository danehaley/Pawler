module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fade: "fade 1s",
      },
      scale: {
        101: "1.01",
      },
      height: {
        "nearly-full": "82.5vh",
        "half-full": "50vh",
        profile: "26.7rem",
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
      width: { 128: "52rem", profile: "46.9rem" },
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
