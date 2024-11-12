/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        100: '#d7eff5',
        200: '#88cee2',
        300: '#39aecf',
        400: '#057D9F',
        500: '#287a91',
        600: '#04586f',
        700: '#023240',
      },
      secondary: {
        100: '#FFE6CC',
        200: '#FFBA73',
        300: '#FFA74D',
        400: '#FF8100',
        500: '#E67400',
        600: '#B35A00',
        700: '#663400',
      },
      tertiary: {
        100: '#E5F5E0',
        200: '#C7E9C0',
        300: '#A1D99B',
        400: '#74C476',
        500: '#41AB5D',
        600: '#238845',
        700: '#006D2C',
        800: '#00441B',
      },
      black: '#000000',
      white: '#ffffff',
      success: '#48CA93',
      error: '#FF6868',
      warning: '#FFCC00',
      grey: '#A5A4A4',
      darkGrey: '#969AA3',
    },
    extend: {},
    fontSize: {
      h6: '19.2px',
      h5: '23.04px',
      h4: '27.65px',
      h3: '33.18px',
      h2: '39.81px',
      h1: '47.78px',
      button: '17px',
      body: '16px',
      'body-bold': '20px',
      label: '14px',
      m1: '14px',
      m2: '11.11px',
    },
    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
      ],
      handwriting: [
        "Montserrat",
        "system-ui",
        "-apple-system",
      ],
    },
    fontWeight: {
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      extrabold: 800,
      black: 900,
    },
  },
  plugins: [],
};
