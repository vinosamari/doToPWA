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
        customShadow: "-8px 61px 218px -32px rgba(0,0,0,0.97);",
        textShadow: "4px 7px 24px rgba(0,0,0,0.82)"
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
