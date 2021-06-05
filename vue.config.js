module.exports = {
  css: {
    loaderOptions: {
      // add scss variables import globally
      sass: {
        prependData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/mixins";
        `,
      },
    },
  },
  pwa: {
    name: "AluraDev - Emanuel Gonçalves",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
