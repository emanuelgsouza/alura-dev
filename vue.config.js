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
};
