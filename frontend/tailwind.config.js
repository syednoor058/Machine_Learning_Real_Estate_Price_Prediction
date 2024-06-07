/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat"],
      },
      colors: {
        bodyColor: "#FEEFAD",
        secondaryColor: "#FDDE55",
        darkText: "#222222",
        accentColor: "#03AED2",
        successColor: "#4bb543",
      },
    },
  },
  plugins: [],
}

