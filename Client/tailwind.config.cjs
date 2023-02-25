/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx,md,html}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: ".9rem",
        lg: "2.5rem",
      },
    },
    screens: {
      xs: "356",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#050402",
        main: "#49fdd8",
        background: "#212121",
        tertiary: "#34055b",
        accent: {
          DEFAULT: "#00d3a7",
          hover: "#00d3a7",
        },
        paragraph: "#D1D1D1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
};
