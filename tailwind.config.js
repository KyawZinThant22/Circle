module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      sm : '400px',
      md : '768px',
      lg : '978px',
      xl : '1200px'
    },
    extend: {
      colors :{
        primary :'#072AC8',
        secondary: '#FFC600',
        textColor : '#292E47',
        homeColor : '#F2F4FC',
        paraColor : '#6B708D',
        lightBlue : '#A2D6F9',
        PrimaryHover :"#738fdf;"
      },
    },
  },
  plugins: [],
}
