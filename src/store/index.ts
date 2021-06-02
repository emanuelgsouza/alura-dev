import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarOpen: false,
    projectTitle: "AluraDev - Emanuel Gonçalves",
    currentPage: "Home",
  },

  getters: {
    isSidebarOpen: (state) => state.sidebarOpen,
    siteTitle: (state) => `${state.currentPage} | ${state.projectTitle}`,
  },

  mutations: {
    toggleSidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    changeCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
  },

  actions: {},

  modules: {},
});
