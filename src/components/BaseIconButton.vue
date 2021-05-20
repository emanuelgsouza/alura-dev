<template>
  <button class="base-icon-button">
    <BaseIcon :icon="icon" />
  </button>
</template>

<script>
import { defineComponent } from "vue";

import BaseIcon from "./BaseIcon";

export default defineComponent({
  name: "BaseIconButton",

  components: {
    BaseIcon,
  },

  props: {
    icon: String,
  },
});
</script>

<style lang="scss">
.base-icon-button {
  background-color: var(--dark-blue);
  border-radius: var(--border-radius);
}
</style>
