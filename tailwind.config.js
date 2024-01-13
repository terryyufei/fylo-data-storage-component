/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "paleBlue": "hsl(243, 100%, 93%)",
        "grayishBlue": "hsl(229, 7%, 55%)",
        "darkBlue": "hsl(228, 56%, 26%)",
        "veryDarkBlue": "hsl(229, 57%, 11%)",
        "primaryGradient": " from hsl(6, 100%, 80%) to hsl(335, 100%, 65%)",
      },
      fontFamily: {
        body: ["Raleway, sans-serif"],
      },
      backgroundImage: {
        "desktop": "url(./public/images/bg-desktop.png)",
        "mobile": "url(./public/images/bg-mobile.png)"
      },
      borderRadius: {
        'large' : '130px',
      },
      spacing: {
        '600px': '600px',
      }
    },
  },
  plugins: [],
}

