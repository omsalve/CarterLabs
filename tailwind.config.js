/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- ADD THIS even if unsure
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        heading: ['Onyx', 'serif'],
        script: ['Edwardian', 'cursive'],
      },
    },
  },
  plugins: [],
};
