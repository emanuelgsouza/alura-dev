<template>
  <BaseHeader />

  <main class="main">
    <BaseAsideMenu />

    <router-view />
  </main>
</template>

<script>
import { defineComponent } from "vue";

import BaseHeader from "@/components/BaseHeader.vue";
import BaseAsideMenu from "@/components/BaseAsideMenu.vue";

export default defineComponent({
  components: {
    BaseHeader,
    BaseAsideMenu,
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
    padding: 4rem 0;
    position: relative;

    .base-aside-menu {
      flex: 0 0 100%;
      max-width: var(--aside-width);
    }
  }
}
</style>
