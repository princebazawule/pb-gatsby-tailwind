const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2048px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '4xl': '40%',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '16': '16px',
    },
    ringWidth: {
      'DEFAULT': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
      '11xl': '11rem',
      '12xl': '12rem',
      '13xl': '13rem',
      '14xl': '14rem',
      '15xl': '15rem',
     },
     fill: theme => ({
      'green': theme('colors.green.500'),
      'gray': theme('colors.gray.900'),
      'teal': theme('colors.teal.500'),
      'white': theme('colors.blueGray.100'),
      }),
     minHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '8/10': '80vh',
      '9/10': '90vh',
      'full': '100vh',
     },
    extend: {
      colors: {
        teal: colors.teal,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        emerald: colors.emerald,
        sky: colors.sky,
        yellow: colors.amber,
      },
      keyframes: {
        outIn: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        outIn: 'outIn 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      animation: ['hover'],
    },
    textColor: ['first-of-type', 'display'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addVariant, e }) {
      addVariant("first-of-type", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first-of-type${separator}${className}`)}:first-of-type`;
        });
      });
    }),
  ],
}
