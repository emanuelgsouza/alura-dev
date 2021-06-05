import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    sidebarOpen: false,
    projectTitle: "AluraDev - Emanuel Gonçalves",
    currentPage: "Home",
    notification: {
      active: false,
      message: "",
      type: "positive",
    },
    user: {
      name: null,
      github: null,
      avatar: null,
      email: null,
    },
    loginActive: false,
  },

  getters: {
    isNotificationActive: (state) => state.notification.active,
    notificationMessage: (state) => state.notification.message,
    notificationType: (state) => state.notification.type,

    isSidebarOpen: (state) => state.sidebarOpen,
    siteTitle: (state) => `${state.currentPage} | ${state.projectTitle}`,

    hasUser: (state) => !!state.user.github,

    isLoginActive: (state) => state.loginActive,
  },

  mutations: {
    toggleSidebarOpen(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },

    changeCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },

    setNotification(state, payload: { message: string; type: string }) {
      state.notification.active = true;
      state.notification.message = payload.message;
      state.notification.type = payload.type;
    },

    clearNotification(state) {
      state.notification = {
        active: false,
        message: "",
        type: "positive",
      };
    },

    setUser(state, user) {
      state.user = user;
    },

    closeLoginForm(state) {
      state.loginActive = false;
    },

    openLoginForm(state) {
      state.loginActive = true;
    },
  },

  actions: {
    loadUserFromGithub({ commit }, github) {
      fetch(`https://api.github.com/users/${github}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          commit("setNotification", {
            message: "Usuário não encontrado",
            type: "negative",
          });
        })
        .then((value) => {
          commit("setUser", {
            name: value.name,
            github: value.login,
            avatar: value.avatar_url,
            email: value.email,
          });

          commit("setNotification", {
            message: "Dados recuperados com successo",
            type: "positive",
          });
        });
    },
  },

  plugins: [
    createPersistedState({
      paths: ["user"],
    }),
  ],
});
