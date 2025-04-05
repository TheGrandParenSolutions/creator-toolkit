/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-app': '#ffff',
        'dark-app': '#18181b',
        'dark-app-content': '#18181b'
      },
      transitionProperty: {
        width: "width",
        transform: "transform",
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(62deg, #fbab7e 0%, #ffd580 50%, #FFC676 100%)',
        'sec-gradient': `linear-gradient(
          0deg,
        rgba(255, 125, 0, 1) 0%,
        rgba(255, 95, 109, 1) 100%
        )`,
      },
      boxShadow: {
        'ct-light': 'inset 3px 3px 5px rgba(0, 0, 0, 0.15), inset -3px -3px 5px rgba(255, 255, 255, 0.8)',
        'ct-dark': 'inset 4px 4px 6px rgba(0, 0, 0, 0.4), inset -4px -4px 6px rgba(255, 255, 255, 0.05)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0", transform: "scale(0.8) rotate(-45deg)" },
          "50%": { opacity: "0.5", transform: "scale(1.1) rotate(20deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        disappear: {
          "0%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.5", transform: "scale(1.1) rotate(20deg)" },
          "100%": { opacity: "0", transform: "scale(0.8) rotate(-45deg)" },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
        disappear: "disappear 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}