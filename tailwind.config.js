module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Inicio': "url('/img/Inicio.png')",
        'Login': "url('/img/register&login.png')",
        'Bienvenida': "url('/src/img/pattern_react.png')"
      }
    },
  },
  plugins: [],
}
