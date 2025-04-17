/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F7D22D',
        'light-gray': '#F3F3F7',
        gray: '#696F7A',
        'desc-color': '#686466',
        'light-blue': '#E3ECF5',
        pink: '#FF2E65',
        'desc-color2': '#797979'
      },
      maxWidth: {
        1250: '1250px'
      },
      width: {
        70: '70px',
        77: '77px',
        253: '253px',
        44: '44px',
        350: '350px',
        391: '391px',
      },
      height: {
        70: '70px',
        77: '77px',
        253: '253px',
        44: '44px',
        350: '350px',
        391: '391px',
      },
      boxShadow: {
        'mini-cart': '0px 4px 24px 0px #0000000F',
        'action-cart': '0px 2px 17px 0px #00000012'
      },
      fontSize: {
        13: '13px',
        44: '44px',
        20: '20px',
      },
      spacing: {
        '29': '29px',
        '48': '48px',
      }
    },
  },
  plugins: [],
}