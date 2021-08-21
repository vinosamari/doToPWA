module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myLightBlue: "#8ECAE6",
        myBlueGreen: "#219EBC",
        myDeepBlue: "#023047",
        myBeeYellow: "#FFB703",
        mySweetOrange: "#FB8500",
        myMaroon: "#750D37"
      },
      fontFamily: {
        customHand: ["Handlee", "sans-serif", '"Noto Sans"'],
        customMono: [
          "Source Code Pro",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace"
        ]
      },
      boxShadow: {
        customShadow: "15 35px 70px -22px rgba(0, 0, 0, 0.85)"
      },
      fontSize: {
        customSize: ["0.95rem", { lineHeight: "1.35rem" }]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
