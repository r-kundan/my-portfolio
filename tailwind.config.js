/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {            
        left: {
            '0%': { transform: 'translate(-400%,0%) skewX(0deg)' },
            '100%': { transform: 'translate(0%,0%) skewX(2deg)' },
            
          },
          right:{
            '0%': { transform: 'translate(400%,0%) skewX(0deg)' },
            '100%': { transform: 'translate(0%,0%) skewX(2deg)' },
          },
          fall:{
            '0%': { transform: 'translate(0%,-400%) skewX(0deg)' },
            '100%': { transform: 'translate(0%,0%) skewX(0deg)' }
          },
          fallText:{
            from: { transform: 'translateY(-150%)' },
            to: { transform: 'translateY(10%)' },
          },
          slide: {
           
            from: { transform: 'translateX(100%)' },
            to: { transform: 'translateX(-100%)' },
          },
         
        },
  
  animation: {
    fall: 'fall 2s ease',
    fallText: 'fallText 2s linear infinite',
    slide: 'slide 20s linear infinite',
    left: 'left 2s ease',
       right: 'right 3s ease',
  }
      ,
      colors:
      {
        header: '#8da9c4',
        gray: '#BAB2B5',
        offwhite:'#FFDEAD',
        bgcolor:'rgba(255, 111, 16, 0.727)'
      },
      boxShadow:{
        md: 'inset 0px 0px 8px 2px rgb(180 83 9)',
        lg: '0px 0px 6px 1px gray',
       iconsha:' 0px 0px 20px 4px white'

        
      },
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
  plugins: [require("tailwindcss-animate"),],
}

