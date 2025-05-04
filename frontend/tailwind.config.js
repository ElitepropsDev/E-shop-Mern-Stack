/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // Removed "html" since it's not needed in React
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Changed to lowercase
        poppins: ["Poppins", "sans-serif"], // Changed to lowercase
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
