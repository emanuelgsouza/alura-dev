<template>
  <div class="base-search">
    <input
      class="base-search__input input"
      type="search"
      name="base-search"
      v-model="search"
      placeholder="Busque por algo"
    />

    <button class="base-search__button">
      <BaseIcon icon="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import BaseIcon from "@/components/BaseIcon.vue";

export default defineComponent({
  name: "BaseSearch",

  components: {
    BaseIcon,
  },

  setup() {
    const search = ref("");

    return {
      search,
    };
  },
});
</script>

<style lang="scss">
.base-search {
  display: flex;
  flex: 1;
  justify-content: flex-start;

  &__input {
    max-width: var(--inner-container);
  }

  &__button {
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

  @media screen and (max-width: $max-mobile-breakpoint) {
    & {
      justify-content: flex-end;
      padding-right: 0;
    }

    &__input {
      display: none;
    }

    &__button {
      display: flex;
    }
  }
}
</style>
