/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#00C0B0",
        "primary-400": "#008B8B",
        primary: "#01796F",
        "stroke-light": "#D4D4D4",
      },
    },
  },
  plugins: [],
};
