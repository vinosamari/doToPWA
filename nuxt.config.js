export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DoTo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A simple to do web app with a personality"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-vite",
    "@nuxtjs/google-fonts",
    "nuxt-animejs"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "vue-sweetalert2/nuxt",
    "@nuxtjs/strapi"
  ],
  loadingIndicator: {
    name: "folding-cube",
    color: "#EB5A77",
    background: "#023047",
    continuous: true
  },

  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      });
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 200,
        easing: "easeInOutSine",
        complete: done
      });
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 200,
        easing: "easeInOutSine",
        complete: done
      });
    }
  },
  googleFonts: {
    families: {
      "Source Code Pro": true,
      Handlee: true
    },
    prefetch: true,
    preload: true,
    display: "swap"
  },
  sweetalert: {
    confirmButtonColor: "#023047",
    cancelButtonColor: "#ff7674",
    heightAuto: false
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
