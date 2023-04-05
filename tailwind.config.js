/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#f59e0b",
        'primary-hover':"#fbbf24",
        'primary-click':"#8F9A21",
        'cs-black': "#333333",
        'cs-gray': "#94a3b8",
        'cs-body': "#64748b",
        'cs-primary-soft': "#FFFFED",
        'cs-background': "#FFFFFF",
        // fffbeb

      },
fontFamily : {
  // title
  titleExtraLight:"AlbertSans-ExtraLight",
  titleLight:"AlbertSans-Light",
  titleRegular:"AlbertSans-Regular",
  titleSemiBold:"AlbertSans-SemiBold",
  // body
  bodyLight:"Barlow-Light",
  bodyMedium:"Barlow-Medium",
  bodyRegular:"Barlow-Regular",
}
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
