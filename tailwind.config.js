/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        lobster: ["Lobster", 'sans-serif'],
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

