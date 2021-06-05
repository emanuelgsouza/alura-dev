<template>
  <BaseLogin :active="showLoginForm" />

  <BaseNotification
    v-model:is-open="isNotificationOpen"
    :message="notificationMessage"
    :type="notificationType"
    @close="handleClose"
  />

  <BaseHeader />

  <main class="main" :class="{ 'main--sidebar-open': isSidebarOpen }">
    <BaseAsideMenu />

    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";

import BaseLogin from "@/components/BaseLogin.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseAsideMenu from "@/components/BaseAsideMenu.vue";
import BaseNotification from "@/components/BaseNotification.vue";

export default defineComponent({
  components: {
    BaseLogin,
    BaseHeader,
    BaseAsideMenu,
    BaseNotification,
  },

  data: () => ({
    isNotificationOpen: false,
  }),

  computed: {
    ...mapGetters([
      "isLoginActive",
      "hasUser",
      "isSidebarOpen",
      "siteTitle",
      "isNotificationActive",
      "notificationMessage",
      "notificationType",
    ]),

    showLoginForm() {
      return this.isLoginActive && !this.hasUser;
    },
  },

  watch: {
    isNotificationActive: {
      handler(newValue) {
        this.isNotificationOpen = newValue;
      },
    },

    $route: {
      handler() {
        if (this.isSidebarOpen) {
          this.toggleSidebarOpen();
        }
      },
    },

    siteTitle: {
      handler(newValue) {
        document.title = newValue;
      },
      immediate: true,
    },
  },

  methods: {
    ...mapMutations(["clearNotification", "toggleSidebarOpen"]),

    handleClose() {
      setTimeout(() => {
        this.clearNotification();
      }, 3000);
    },
  },
});
</script>

<style lang="scss">
#app {
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 3.2rem;
  overflow-x: hidden;

  .main {
    display: flex;
    margin-top: 4rem;
    position: relative;

    .base-aside-menu {
      flex: 0 0 100%;
      max-width: var(--aside-width);
    }

    &::before {
      position: absolute;
      content: "";
      background-color: var(--dark-blue);
      width: 100%;
      height: 100%;
      z-index: 4;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease-in-out;
    }

    &--sidebar-open::before {
      opacity: 1;
      visibility: inherit;
    }
  }

  @media screen and (max-width: $max-tablet-breakpoint) {
    & {
      padding: 3.2rem 1.6rem;
    }
  }
}
</style>
