<template>
  <div id="nav">
    <BaseHeader />
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

import BaseHeader from "@/components/BaseHeader.vue";

export default defineComponent({
  components: {
    BaseHeader,
  },
});
</script>

<style lang="scss">
#app {
  background-color: var(--dark-blue);
  min-height: 100vh;
  padding: 3.2rem;
}
</style>
