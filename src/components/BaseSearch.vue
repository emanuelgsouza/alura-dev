<template>
  <div class="base-search">
    <input
      type="search"
      name="base-search"
      v-model="search"
      placeholder="Busque por algo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BaseSearch",

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
  flex: 1;
  padding: 0 3.2rem;
  text-align: center;

  input {
    background-color: rgba(#ffffff, 0.16);
    border: none;
    border-radius: 8px;
    color: #ffffff;
    max-width: 75.2rem;
    padding: 1.6rem 1.4rem;
    width: 100%;

    &:hover {
      background-color: rgba(#ffffff, 0.24);
    }

    // Link: https://css-tricks.com/almanac/selectors/p/placeholder/
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: var(--white);
    }

    &::-moz-placeholder {
      /* Firefox 19+ */
      color: var(--white);
    }

    &:-ms-input-placeholder {
      /* IE 10+ */
      color: var(--white);
    }

    &:-moz-placeholder {
      /* Firefox 18- */
      color: var(--white);
    }
  }
}
</style>
