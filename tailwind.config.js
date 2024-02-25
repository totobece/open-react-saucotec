const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#18213B',
        blue: {
          800: '#1e40af',
          888: '#11204A',
          889: '#31608A',
          999: '#4B7FAF', 
          998: '#7DA4D1', 
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
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        bebas_neue: ['var(--font-bebas-neue)', 'sans-serif'],
      },
      fontSize: {
        // Define tus tamaños de fuente personalizados aquí
      },
      // Agrega otras extensiones de tema según sea necesario
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Función de la librería personalizada para agregar variables de colores como CSS globales
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );
      addBase({
        ":root": newVars,
      });
    },
  ],
};
