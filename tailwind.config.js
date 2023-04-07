/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        white: '#FFFFFF',
        primary: '#1A3260',
        lightPrimary: '#346699',
        cyan:"#6699CC",
        lightBlue: "#E6F2FF",
      },
      backgroundImage: {
        'hero': "url('../public/buildings.jpg')",
      },
    },
  },
  plugins: [],
}
