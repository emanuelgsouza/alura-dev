<template>
  <button class="base-profile">
    <img
      class="base-profile__image"
      :src="user.profile"
      :alt="`Foto de perfil the ${user.name}`"
    />

    <span class="base-profile__name"> {{ user.name }} </span>
  </button>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "BaseProfile",

  setup() {
    const user = ref({
      name: "Emanuel",
      profile: "https://avatars.githubusercontent.com/u/20342656",
    });

    return {
      user,
    };
  },
});
</script>

<style lang="scss">
.base-profile {
  align-items: center;
  appearance: none;
  background-color: var(--dark-blue);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  padding: 1.2rem;

  &__image {
    border-radius: 100%;
    width: 3.2rem;
    height: 3.2rem;
  }

  &__name {
    margin-left: 8px;
    color: var(--white);
  }

  &:hover {
    background-color: rgba(#ffffff, 0.08);
  }

  .base-aside-menu & {
    background-color: transparent;

    &:hover {
      background-color: rgba(#ffffff, 0.08);
    }
  }
}
</style>
