/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "DarkGreen" : '#066350',
      "Grey": '#ebeaea',
      "Yellow" : '#f9d027',
      "Orange" : '#e87c17',
      "Black" : '#000000',
      "White" : '#ffffff',
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class"
}

