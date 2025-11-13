/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // CallRail-ish palette
        primary: {
          DEFAULT: '#2D5FE4'
        }
      }
    }
  },
  plugins: []
}
