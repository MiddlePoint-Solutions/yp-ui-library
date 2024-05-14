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
      },
      fontSize: {
        xss: ["0.625rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  plugins: [],
};
