/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Adjust the path to match your project's structure
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed for your JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#78866b',
        customBrown: '#55342b',
      },
    },
  },
  variants: {},
  plugins: [],
}
