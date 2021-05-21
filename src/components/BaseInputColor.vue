<template>
  <label class="base-input-color" :for="id">
    <input :id="id" type="color" :value="color" @change="handleInputChange" />

    <span class="base-input-color__input" :style="computedStyle"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type InputStyle = {
  backgroundColor: string;
};

export default defineComponent({
  name: "BaseInputColor",

  props: {
    id: {
      type: String,
      default: "baseInputColor",
    },

    color: {
      type: String,
      default: "#FFFFFF",
    },
  },

  emits: ["update:color"],

  computed: {
    computedStyle(): InputStyle {
      return {
        backgroundColor: this.color,
      };
    },
  },

  methods: {
    handleInputChange(event: { target: HTMLInputElement }) {
      this.$emit("update:color", event.target.value);
    },
  },
});
</script>

<style lang="scss">
.base-input-color {
  position: relative;
  padding: 8px;
  border: 1px solid var(--white);
  border-radius: var(--border-radius);

  input {
    opacity: 0;
    width: 100%;
  }

  &__input {
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
    height: calc(100% - 16px);
    width: calc(100% - 16px);
  }
}
</style>
