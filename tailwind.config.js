/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : ['jit'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{primarybg:'#FF2400' }
    },
  },
  plugins: [],
}
