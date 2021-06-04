<template>
  <div :class="computedClasses">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type NotificationTypes = "positive" | "negative";

export default defineComponent({
  name: "BaseNotification",

  props: {
    message: {
      type: String,
      default: "",
      required: true,
    },

    isOpen: Boolean,

    type: {
      type: String as PropType<NotificationTypes>,
      default: "positive",
    },
  },

  computed: {
    computedClasses(): string[] {
      return [
        "base-notification",
        `base-notification--${this.type}`,
        this.isOpen ? `base-notification--open` : "",
      ];
    },
  },

  watch: {
    isOpen(value) {
      if (value) {
        this.openAndRegisterClosing();
      }
    },
  },

  methods: {
    openAndRegisterClosing(): void {
      setTimeout(() => {
        this.$emit("update:isOpen", false);
        this.$emit("close");
      }, 2000);
    },
  },
});
</script>

<style lang="scss">
.base-notification {
  top: 2rem;
  position: fixed;
  left: 2rem;
  z-index: 5;
  transform: translateY(-150%);
  transition: 300ms ease-out;
  padding: 2rem 3rem;
  font-size: 1.4rem;
  border-radius: var(--border-radius);

  &--positive {
    background-color: var(--green);
  }

  &--negative {
    background-color: var(--red);
  }

  &--open {
    transform: none;
  }
}
</style>
