import Color from "color";

const config = {
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
        amber: {
          "50": "#fffdea",
          "100": "#fffbc6",
          "200": "#fff687",
          "300": "#ffea49",
          "400": "#ffdb1e",
          "500": "#fbbc05",
          "600": "#de9101",
          "700": "#b86705",
          "800": "#954f0b",
          "900": "#7b410c",
          "950": "#472101",
        },
        woodsmoke: {
          "50": "#f6f5f5",
          "100": "#e7e6e6",
          "200": "#d2cfcf",
          "300": "#b2aeaf",
          "400": "#8b8586",
          "500": "#706a6b",
          "600": "#5f5b5b",
          "700": "#514d4d",
          "800": "#464445",
          "900": "#3e3b3b",
          "950": "#171616",
        },
        background: {
          get menu() {
            return Color(`#1D1E1F`).alpha(0.5).rgb().string();
          },
          get menuContent() {
            return Color(`#262729`).alpha(0.8).rgb().string();
          },
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

export default config;
