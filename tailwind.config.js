/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'top-banner': "url('/src/assets/images/img3.png')",
        'offer-banner': "url('/src/assets/images/offer.png')",
        'cross-1': "url('/src/assets/images/cross1.png')",
        'cross-2': "url('/src/assets/images/cross2.png')"
      }
    },
  },
  plugins: [],
}

