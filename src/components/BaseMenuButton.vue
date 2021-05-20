<template>
  <button class="base-menu-button" @click="toggleSidebar">
    <BaseIcon :icon="iconName" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "BaseMenuIcon",

  components: { BaseIcon },

  computed: {
    ...mapGetters(["isSidebarOpen"]),

    iconName(): string {
      return this.isSidebarOpen ? "close" : "menu";
    },
  },

  methods: {
    toggleSidebar(): void {
      this.$store.commit("toggleSidebarOpen");
    },
  },
});
</script>

<style lang="scss">
.base-menu-button {
  background-color: transparent;
  border-radius: calc(var(--border-radius) * 2);
  height: 4.8rem;
  width: 4.8rem;

  @include centerUsingFlex();

  &:hover {
    background-color: rgba(80, 129, 251, 0.08);
  }

  &:active {
    background-color: rgba(80, 129, 251, 0.16);
  }
}
</style>
