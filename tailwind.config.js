/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'box1': '#659DCD', // Sesuaikan dengan warna yang Anda inginkan
        'box2' : '#64ADCC',
        'box3' : '#64BFCC',
      }
    },
  },
  plugins: [require("daisyui")],
}