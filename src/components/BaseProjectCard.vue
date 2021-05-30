<template>
  <div class="base-project-card">
    <BaseCodeView
      :background-color="project.color"
      :code="project.code"
      :language="project.language"
      highlight
    />

    <div class="base-project-card__content">
      <p class="base-project-card__title">{{ project.name }}</p>

      <p class="base-project-card__description">{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import type { IProject } from "@/types/interfaces";
import BaseCodeView from "./BaseCodeView.vue";

export default defineComponent({
  name: "BaseProjectCard",

  components: { BaseCodeView },

  props: {
    project: {
      type: Object as PropType<IProject>,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss">
.base-project-card {
  max-width: 52rem;

  .base-code-view {
    max-width: 100%;
  }

  &__content {
    background-color: rgba(0, 0, 0, 0.16);
    padding: 2.4rem;
    color: var(--white);
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  &__title {
    font-size: 2.1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 1.6rem;
    opacity: 0.8;
  }
}
</style>
