/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      // xs: { max: "339px" },
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#FF4C60",
        btnBlack: "#272727",
        btnPrimary: "#3341C1",
        textPrimary: "#292929",
        textSecondary: "#333333",
        textTertiary: "#161616",
        textGray: "#BCB7B7",
        textMuted: "rgba(0,0,0,0.57)",
      },
      backgroundColor: {
        mainBg: "#F9F9FE",
      },
    },
    fontFamily: {
      primary: ["Josefin Sans", "sans-serif"],
      secondary: ["Source Serif Pro", "serif"],
    },
  },
  plugins: [],
};
