/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#313940",
        secondary: "#FFC700",
        dark: "#4E5C68",
        darker: "#1B2126",
        black: "#000",
        white: "#fff",
        lightWhite: "rgba(255,255, 255, 0.5)'",
      },
    },
  },
  plugins: [],
};
