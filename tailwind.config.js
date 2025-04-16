/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'zero': '140px', // custom screen size
      },
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
        "dark-app-content": `
        radial-gradient(
            at 30% 40%, rgba(255, 183, 0, 0.06),
            transparent 40%
          ),
          radial-gradient(
            at 70% 60%, rgba(140, 100, 255, 0.05),
            transparent 60%
          ),
          linear-gradient(
            to bottom,
            #0d0d0d 0%,
            #0a0a0a 60%,
            #000000 100%
          );`
        ,
        "light-app": `radial-gradient(
            at 25% 35%, rgba(255, 213, 128, 0.07),
            transparent 40%
          ),
          radial-gradient(
            at 75% 50%, rgba(200, 180, 255, 0.04),
            transparent 50%
          ),
          linear-gradient(
            to bottom,
            #ffffff 0%,
            #fafafa 60%,
            #f5f5f5 100%
          );`
        ,
        'main-gradient': 'linear-gradient(62deg, #FF9145 0%, #ffd580 40%, #FFC676 80%, #C19A6B 100%)',
        'sec-gradient': `linear-gradient(
          0deg,
        rgba(255, 125, 0, 1) 0%,
        rgba(255, 95, 109, 1) 100%
        )`,
        'text-gradient': `linear-gradient(#f0f0f0, #9e9e9e);`
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
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'star-border': {
          '0%': { transform: 'rotate(0deg)', opacity: '0.1' },
          '50%': { opacity: '0.6' },
          '100%': { transform: 'rotate(360deg)', opacity: '0.1' },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
        disappear: "disappear 1s ease-in-out forwards",
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'star-border': 'star-border 6s linear infinite',
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
}