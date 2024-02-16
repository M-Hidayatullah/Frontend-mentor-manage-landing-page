module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#F25F3A",
        secondary: "#242D52",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
