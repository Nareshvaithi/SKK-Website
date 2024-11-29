/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "themebrown":"#b35c21"
      },
      fontFamily:{
        "mainFont":["SUSE"],
        "mainFont2":["Dosis"]
      },
      container:{
        center:true,
        padding:"1rem"
      }
    },
  },
  plugins: [],
}

