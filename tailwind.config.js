// -- tailwind.config.js --

/ @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{vue,js,ts,jsx,tsx}", // Hier sicherstellen, dass alle Dateien erfasst werden
  ],
  theme: {
    extend: {
      screens: {
        xxs: { max: "420px" },
        xs: { max: "500px" },
      },
      colors: {
        headerColor: "#1E3A8A",
        orange: "#fa7902",
        red: "#cc2929",
        darkblue: "#141d2f",
        grey: "#bbbbbb",
        darkblueTrans: "rgba(20, 29, 47, 0.9)",
        lightblueTrans: "rgba(240, 81, 81, 1)",
        fontWhite: "rgba(231, 224, 224, 0.993)",
        aqua: "rgb(84, 230, 230)",
        bgColorFooter: "#3c6792",
      },
      boxShadow: {
        navbar: "-1px 3px 14px 12px #1E3A8A",
        contentshadow: "-1px 0 15px 5px rgba(0, 0, 0, 0.77)",
        headershadow: "0px 3px 9px 7px rgba(0,0,0,0.68)",
      },
      backgroundImage: {
        bgColor: "linear-gradient(37deg, rgb(32, 218, 233), rgb(40, 21, 236))",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        h1: { fontSize: "2em", fontWeight: "bold", color: "blue" },
        h2: { fontSize: "1.5em", fontWeight: "bold", color: "black" },
        h3: { fontSize: "1.17em", fontWeight: "bold", color: "black" },
        h4: { fontSize: "1em", fontWeight: "bold", color: "black" },
        h5: { fontSize: "0.83em", fontWeight: "bold", color: "black" },
        h6: { fontSize: "0.67em", fontWeight: "bold", color: "black" },
      });
    },
  ],
};