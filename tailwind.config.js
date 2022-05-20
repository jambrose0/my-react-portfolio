module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      oxford: "#0A1128",
      royal: "#001F54",
      indigo: "#034078",
      teal: "#1282A2",
      white: "#FEFCFB",
      red: "#FEFBFB",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
