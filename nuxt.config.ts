export default defineNuxtConfig({
  srcDir: "./",
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt"],
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },
  plugins: [{ src: "@/plugins/amplify.ts", mode: "client" }],
  vite: {
    // temp-fix for dev, it breaks build for now (see: https://github.com/nuxt/framework/issues/4916)
    define: {
      // global: {}
      "window.global": {},
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {},
});
