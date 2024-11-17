/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "DarkGreen" : '#23784e',
      "Grey": '#ebeaea',
      "Yellow" : '#eaac1e',
      "Orange" : '#e87c17',
      "Black" : '#000000',
      "White" : '#ffffff',
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class"
}

