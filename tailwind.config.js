/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/*/.{js,ts,jsx,tsx}',
    './pages/*/.{js,ts,jsx,tsx}',
    './components/*/.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#18213B',
        blue: {
         /*  100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A', */
          800: '#1e40af',
          888: '#11204A',
          889: '#31608A',
          999: '#4B7FAF', 
          998: '#7DA4D1', 
          777: '#171D2C',
          111: '#5373CE',
        },

        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          
        },

        /* blue: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        }, */
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        bebas_neue: ['var(--font-bebas-neue)', 'sans-serif'],
        'bebas_neue': ['var(--font-bebas_neue)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '2.8rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      borderRadius: {
        '12xl': '50px',
      }
  
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}