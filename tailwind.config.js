/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        header: '#8da9c4',
        gray: '#BAB2B5',
        offwhite:'#FFDEAD'
        
      },
      boxShadow:{
        md: 'inset 0px 0px 8px 2px rgb(180 83 9)',
        lg: '0px 0px 6px 1px gray',
       iconsha:' 0px 0px 20px 4px white'

        
      },
      transitionDuration: {
        '2000': '2000ms',
      }
      
    },
    height: {
			"10v": "10vh",
			"20v": "20vh",
			"30v": "30vh",
			"40v": "40vh",
			"50v": "50vh",
			"60v": "60vh",
			"70v": "70vh",
			"80v": "80vh",
			"90v": "90vh",
			"100v": "100vh",
		},
    
  },
  plugins: [],
}

