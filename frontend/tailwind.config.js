/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Kanit:["Kanit","Static"],
        Host:["Host Grotesk", "sans-serif"]
      }
      ,
    },
  },
  
  plugins: [],
}