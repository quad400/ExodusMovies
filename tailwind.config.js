/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'top-banner': "url('/src/assets/images/img3.png')",
        'offer-banner': "url('/src/assets/images/offer.png')",
        "bottom-banner": "url('/src/assets/images/img1.png')"
      }
    },
  },
  plugins: [],
}

