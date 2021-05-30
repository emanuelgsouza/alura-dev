<template>
  <div class="base-select">
    <select class="select" @change="handleChange">
      <option
        v-for="(option, key) in options"
        :value="option.value"
        :key="key"
        :selected="value === option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <BaseIcon icon="arrowDown" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "BaseSelect",

  components: { BaseIcon },

  props: {
    options: {
      type: Array,
      required: true,
      default: () => [],
    },

    value: {
      type: [String, Number],
      default: null,
      required: true,
    },
  },

  emits: ["update:value"],

  methods: {
    handleChange(event: { target: HTMLSelectElement }) {
      this.$emit("update:value", event.target.value);
    },
  },
});
</script>

<style lang="scss">
.base-select {
  position: relative;
  background-color: rgba(255, 255, 255, 0.16);
  border-radius: var(--border-radius);

  .base-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.4rem;
  }
}
.select {
  appearance: none;
  background-color: transparent;
  color: var(--white);
  border: none;
  padding: 1.6rem 2rem 1.6rem 1.4rem;
  font-size: 1.6rem;
  width: 100%;
}
</style>
