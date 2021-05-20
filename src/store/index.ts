import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarOpen: false,
  },

  getters: {
    isSidebarOpen: (state) => state.sidebarOpen,
  },

  mutations: {
    toggleSidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },

  actions: {},

  modules: {},
});
