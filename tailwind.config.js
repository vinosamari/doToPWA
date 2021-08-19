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
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
