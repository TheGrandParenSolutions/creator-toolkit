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
        "dark-app-content": `radial-gradient(
          at 20% 30%, rgba(255, 183, 0, 0.1), /* warm yellow nebula top-left */
          transparent 35%
        ),
        radial-gradient(
          at 80% 40%, rgba(98, 0, 255, 0.12), /* deep violet light */
          transparent 60%
        ),
        radial-gradient(
          at 50% 70%, rgba(0, 255, 255, 0.06), /* faint blue halo bottom */
          transparent 70%
        ),
        radial-gradient(
          at center, rgba(255, 255, 255, 0.05), 
          rgba(20, 20, 20, 1) 80%,
          #000000 100%
        );
        `,
        "light-app": `radial-gradient(
          at 20% 30%, rgba(255, 200, 60, 0.06), /* warmer & brighter yellow glow */
          transparent 35%
        ),
        radial-gradient(
          at 80% 40%, rgba(140, 100, 255, 0.03), /* softened and brighter violet */
          transparent 60%
        ),
        radial-gradient(
          at 50% 70%, rgba(100, 255, 255, 0.03), /* more vibrant blue-cyan */
          transparent 70%
        ),
        radial-gradient(
          at center, rgba(255, 255, 255, 0.03),
          #f9f9f9 80%,
          #ffffff 100%
        )`,
        'main-gradient': 'linear-gradient(62deg, #fbab7e 0%, #ffd580 50%, #FFC676 100%)',
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
      },
      animation: {
        appear: "appear 1s ease-in-out forwards",
        disappear: "disappear 1s ease-in-out forwards",
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'star-border': 'star-border 6s linear infinite',
      },
    },
  },
  plugins: [],
}