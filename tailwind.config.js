module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    colors: {
      transparent: "transparent",
      black: "#000814",
      oxford: "#001D3D",
      royal: "#003566",
      gold: "#FFC300",
      yellow: "#FFD60A",
      white: "#FEFCFB",
      red: "#FF2400",
      purple: "#BF40BF",
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    extend: {
      backgroundImage: {
        stars: "url('../src/assets/images/StarrySky.png')",
        blue: "url('../src/assets/images/blue-background.png')",
        mtn: "url('../src/assets/images/mtnStars.png')",
      },
      image: {
        me: "url('../src/assets/images/jacob-ambrose.png')",
      },
      spacing: {
        bigspace: "100px",
      },
    },
  },
  plugins: [],
};
