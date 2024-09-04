/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'Lato'],
        Playfair_Display : ['Playfair Display','merriweather']
      },
      colors: {
        marble: '#F2F8FC',
        
    },
    },
  },
  plugins: [],
}

