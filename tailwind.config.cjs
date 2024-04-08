module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem", //640px
        md: "2rem", //768px
        lg: "5rem", //1024px
        xl: "7rem", //1280px
        "2xl": "12rem", //1536px
      },
    },
    extend: {
      colors: {
        "black-500": "#1c1c1c",
        gray: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
