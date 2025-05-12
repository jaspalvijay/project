/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5f0',
          100: '#f0e9df',
          200: '#e2d3be',
          300: '#d1b896',
          400: '#ba9767',
          500: '#a9834b',
          600: '#96723d',
          700: '#7c5d34',
          800: '#674d30',
          900: '#57422c',
          950: '#332517',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b1bbca',
          400: '#8796ac',
          500: '#69789a',
          600: '#525f7f',
          700: '#434d67',
          800: '#3a4257',
          900: '#333a4a',
          950: '#212431',
        },
        accent: {
          50: '#fef7ee',
          100: '#fcedd7',
          200: '#f8daaf',
          300: '#f4c07c',
          400: '#f0a247',
          500: '#ec8522',
          600: '#dc6b17',
          700: '#b75115',
          800: '#924018',
          900: '#783718',
          950: '#411b0b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'strong': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg')",
        'texture': "url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')",
      },
    },
  },
  plugins: [],
};