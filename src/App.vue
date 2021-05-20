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
  background-color: var(--dark-blue);
  min-height: 100vh;
  padding: 3.2rem;

  .main {
    display: flex;
    padding: 4rem 0;

    .base-aside-menu {
      flex: 0 0 100%;
      max-width: var(--aside-width);
    }
  }

  @media screen and (max-width: $max-tablet-breakpoint) {
    .base-aside-menu {
      display: none;
    }
  }
}
</style>
