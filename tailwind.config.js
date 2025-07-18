/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'custom-purple': '#7c3aed',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
    },
  },
  plugins: [],
}