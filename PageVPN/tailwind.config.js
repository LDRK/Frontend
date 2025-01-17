/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-body": "#FFFFFF",
        "color-button": "#F53838",
      },
      fontSize: {
        xsss: "5px",
        xss: "10px",
      },
    },
  },
  plugins: [],
};
