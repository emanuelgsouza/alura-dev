<template>
  <button class="base-profile" @click="handleClick">
    <template v-if="login">
      <div class="base-profile__icon">
        <BaseIcon icon="profile" />
      </div>

      <span class="base-profile__name"> Login </span>
    </template>

    <template v-if="hasUser">
      <img
        class="base-profile__image"
        :src="user.avatar"
        :alt="`Foto de perfil the ${user.name}`"
      />

      <span class="base-profile__name"> {{ name }} </span>
    </template>
  </button>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

import BaseIcon from "./BaseIcon.vue";

export default defineComponent({
  name: "BaseProfile",

  components: {
    BaseIcon,
  },

  props: {
    login: Boolean,

    user: Object,
  },

  computed: {
    hasUser() {
      return this.user && this.user.github;
    },

    name() {
      if (this.hasUser) {
        if (typeof this.user.name === "string") {
          const splitted = this.user.name.split(" ");

          return splitted[0];
        }

        if (typeof this.user.github === "string") {
          return this.user.github;
        }
      }

      return "";
    },
  },

  methods: {
    ...mapMutations(["openLoginForm"]),

    handleClick() {
      if (this.login) {
        this.openLoginForm();
      }
    },
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

  &__icon {
    border-radius: 100%;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
