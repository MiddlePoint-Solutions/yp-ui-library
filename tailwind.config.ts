import Color from "color";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        button: {
          primary: {
            base: "#FFFFFF",
            get hover() {
              return Color(this.base).mix(Color("#000000"), 0.15).hex();
            },
            get text() {
              const baseColor = Color(this.base);
              return baseColor.isLight() ? "#000000" : "#FFFFFF";
            },
          },
          secondary: {
            base: "rgba(255, 255, 255, 0.16)",
            get hover() {
              return Color(this.base).mix(Color("#000000"), 0.15).hex();
            },
            get text() {
              return "#FFFFFF";
            },
          },
        },
        badge: {
          primary: {
            base: "#fff",
            get hover() {
              return Color(this.base).mix(Color("#000000"), 0.15).hex();
            },
            get text() {
              const baseColor = Color(this.base);
              return baseColor.isLight() ? "#000000" : "#FFFFFF";
            },
          },
          secondary: {
            base: "#FFEB37",
            get hover() {
              return Color(this.base).mix(Color("#000000"), 0.15).hex();
            },
            get text() {
              const baseColor = Color(this.base);
              return baseColor.isLight() ? "#000000" : "#FFFFFF";
            },
          },
        },
        grayish: {
          200: "#D9D9D9", // light grey
          400: "#7A7A7A", // medium grey
          500: "#6D747D", // medium-dark grey with a blueish tint
          600: "#5F6166", // dark grey
          700: "#5A5D61", // dark grey with a subtle blueish hue
          800: "#55575C", // darker grey with a hint of blue
          900: "#424447", // dark grey
          950: "#262729", // very dark grey, almost black
          1000: "#1D1E1F", // almost black
        },
      },
      fontSize: {
        caption: ["0.5625rem", { lineHeight: "auto" }],
        xss: ["0.625rem", { lineHeight: "auto" }],
        "text-6xl": ["3.75rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
};
