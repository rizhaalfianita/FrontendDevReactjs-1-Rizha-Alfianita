/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {
      colors: {
        softBlack: "#1f2937",
        gray: "#6b7280",
        lightGray: "#d1d5db",
        extraLightGray: "#e5e7eb",
        darkerSky: "#075985",
        mediumSky: "#0369a1",
        sky: "#38bdf8",
        lightSky: "#e0f2fe",
        accentAmber: "#fbbf24",
        rose: "#be123c",
      },
      borderWidth: {
        1: "1px",
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
