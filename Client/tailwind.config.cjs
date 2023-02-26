/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,html}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '.9rem',
        lg: '2.5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        primary: {
          100: '#212121',
        },
        main: '#49fdd8',
        background: '#212121',
        tertiary: '#34055b',
        accent: {
          DEFAULT: '#00d3a7',
          hover: '#00d3a7',
        },
        paragraph: '#D1D1D1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss'),
    require('flowbite/plugin'),
  ],
};
