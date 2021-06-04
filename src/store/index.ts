import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarOpen: false,
    projectTitle: "AluraDev - Emanuel Gonçalves",
    currentPage: "Home",
    notification: {
      active: false,
      message: "",
    },
  },

  getters: {
    isNotificationActive: (state) => state.notification.active,
    notificationMessage: (state) => state.notification.message,
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

    setNotification(state, message: string) {
      state.notification.active = true;
      state.notification.message = message;
    },

    clearNotification(state) {
      state.notification = {
        active: false,
        message: "",
      };
    },
  },

  actions: {},

  modules: {},
});
