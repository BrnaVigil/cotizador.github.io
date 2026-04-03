/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#feb207'
      },
      fontFamily: {
        "principal": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}