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
.base-icon {
  color: var(--white);
  width: 2rem;
}
</style>
