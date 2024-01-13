/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      animation: [],
      colors: {
        primary: '#023D29',
        secondary: "#0f7553",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",

        green: {
          50: "#f2f9f7",
          100: "#e4f5ef",
          200: "#b8e3d4",
          300: "#83c9b1",
          400: "#70d4b2",
          500: "#0f7553",
          600: "#0c5e42",
          700: "#094732",
          800: "#063021",
          900: "#031810",
        }
      }
    },
  },
  plugins: [],
}

