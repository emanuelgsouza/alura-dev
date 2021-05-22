<template>
  <BaseHeader />

  <main class="main" :class="{ 'main--sidebar-open': isSidebarOpen }">
    <BaseAsideMenu />

    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import BaseHeader from "@/components/BaseHeader.vue";
import BaseAsideMenu from "@/components/BaseAsideMenu.vue";

export default defineComponent({
  components: {
    BaseHeader,
    BaseAsideMenu,
  },

  computed: {
    ...mapGetters(["isSidebarOpen"]),
  },
});
</script>

<style lang="scss">
#app {
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 3.2rem;

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
}
</style>
