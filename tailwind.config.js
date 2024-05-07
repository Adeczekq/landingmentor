/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },

    extend: {},
    colors: {
      'dark-blue': '#13183F',
      'light-blue': '#666CA3',
      'priject-grey': '#83869A',
      'dark-pink': '#F74780',
      'light-pink': '#FFA7C3',
      white: '#FFF',
      'gradient-pink': '#F02AA6 ',
      'gradient-orange': '#FF6F48',
      'gradient-blue': '#4851FF',
      'gradient-pink2': '#F02AA6',
      'gradient-white': '#F0F1FF',
    },
    fontFamily: {
      customFont: ['"Custom Font"', 'sans-serif'],
      // Add more custom font families as needed
    },
  },
  plugins: [],
};
