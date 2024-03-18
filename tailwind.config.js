/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#553feb', // Add your custom color here
      },
      fontFamily: {
        header: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [
        require('@tailwindcss/forms'),
    // ...
  ],
}