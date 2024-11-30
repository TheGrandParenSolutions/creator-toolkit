/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-app': '#f9f8f5',
        'dark-app': '#1c1c1e',
        'dark-app-content': '#1c1c1e'
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
      },
    },
  },
  plugins: [],
}