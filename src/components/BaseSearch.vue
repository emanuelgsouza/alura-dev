<template>
  <div class="base-search" :class="{ 'base-search--absolute': active }">
    <input
      class="base-search__input input"
      type="search"
      name="base-search"
      v-model="search"
      placeholder="Busque por algo"
    />

    <button class="base-search__button-open" @click="active = true">
      <BaseIcon icon="search" />
    </button>

    <button class="base-search__button-close" @click="active = false">
      <BaseIcon icon="close" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseIcon from "@/components/BaseIcon.vue";

export default defineComponent({
  name: "BaseSearch",

  components: {
    BaseIcon,
  },

  data: () => ({
    search: "",
    active: false,
  }),

  methods: {
    handleToggleActiveMenu() {
      this.active = !this.active;
    },
  },
});
</script>

<style lang="scss">
.base-search {
  align-items: center;
  background-color: var(--dark-blue);
  display: flex;
  flex: 1;
  justify-content: flex-start;

  &__input {
    max-width: var(--inner-container);
  }

  &__button-open,
  &__button-close {
    @include centerUsingFlex();

    display: none;
    background-color: transparent;
    border-radius: calc(var(--border-radius) * 2);
    height: 4.8rem;
    width: 4.8rem;

    &:hover {
      background-color: rgba(80, 129, 251, 0.08);
    }

    &:active {
      background-color: rgba(80, 129, 251, 0.16);
    }
  }

  &--absolute {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &--absolute &__input {
    display: block;
  }

  &--absolute &__button-close {
    display: flex;
    margin-left: 10px;
  }

  &--absolute &__button-open {
    display: none;
  }

  @media screen and (max-width: $max-mobile-breakpoint) {
    & {
      justify-content: flex-end;
      padding-right: 0;
    }

    &__input {
      display: none;
    }

    &__button-open {
      display: flex;
    }
  }
}
</style>
