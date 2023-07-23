/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {},
  },
  screens: {
    xs: "450px",
    '-2xl': { max: '1535px' },
    // => @media (max-width: 1535px) { ... }

    '-xl': { max: '1279px' },
    // => @media (max-width: 1279px) { ... }

    '-lg': { max: '1023px' },
    // => @media (max-width: 1023px) { ... }

    '-md': { max: '767px' },
    // => @media (max-width: 767px) { ... }

    '-sm': { max: '639px' },
    // => @media (max-width: 639px) { ... }
  },
  plugins: [],
}

