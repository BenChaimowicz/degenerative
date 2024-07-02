/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#0A0A0A',
        'eerie_black': '#222222',
        'onyx': '#3B3B3B',
        'davy_gray': '#535353',
        'battleship': '#848484',
        'platinum': '#E5E5E5',
      },
      animation: {
        'slide-down': 'transform: translateY(3rem) 2s ease-out',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
            '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      }
  },
  },
  plugins: [],
}

