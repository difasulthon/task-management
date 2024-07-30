/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#FD7B38',
          secondary: '#FFF4EE',
          greyPrimary: '#65676D',
          greySecondary: '#F1F2F4',
          redPrimary: '#FF6C65',
          greenPrimary: '#60B158'
        }
      }
    },
  },
  plugins: [],
}

