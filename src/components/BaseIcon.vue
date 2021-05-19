<template>
  <svg class="base-icon" :viewBox="iconPath.viewBox" v-html="iconPath.path" />
</template>

<script>
import { defineComponent, computed } from "vue";

import icons from "@/lib/icons";

export default defineComponent({
  name: "BaseIconButton",

  props: {
    icon: String,
  },

  setup(props) {
    const iconPath = computed(() => icons[props.icon]);

    return {
      iconPath,
    };
  },
});
</script>

<style lang="scss">
.base-icon-button {
  appearance: none;
  background-color: var(--dark-blue);
  border: none;
  border-radius: var(--border-radius);
  color: var(--white);
}
</style>
