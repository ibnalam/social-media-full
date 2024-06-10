/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      primary_bg: "var(--primary_bg)",
      single_color: "var(--single_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_clr: "var(--hover_clr)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      tittle_color: "var(--tittle_color)",
      black: "var(--black)",
      white: "var(--white)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yellow: "var(--yellow)",
      "purple-100": "var(--purple-100)",
      "pink-100": "var(--pink-100)",
      "cyan-100": "var(--cyan-100)",
    },
    fontFamily: {
      regular: ['Reguler'],
      black: ['Black'],
      bold: ['Bold'],
      extraBold: ['ExtraBold'],
      light: ['Light'],
      medium: ['Medium'],
      semiBold: ['SemiBold'],
      semiBoldItalic: ['SemiBoldItalic'],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}

