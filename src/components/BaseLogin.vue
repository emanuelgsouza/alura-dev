<template>
  <div class="base-login" :class="{ 'base-login--active': active }">
    <button class="base-login__close" @click="handleClick">Fechar</button>

    <div class="base-login__content">
      <input
        class="input"
        type="text"
        v-model="github"
        placeholder="Usar seu Github para login"
      />

      <button class="button" :disabled="!hasGithub" @click="handleSearch">
        Pesquisar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "BaseLogin",

  props: {
    active: Boolean,
  },

  data: () => ({
    github: "",
  }),

  computed: {
    hasGithub() {
      return this.github.length > 0;
    },
  },

  methods: {
    ...mapMutations(["closeLoginForm", "setNotification"]),
    ...mapActions(["loadUserFromGithub"]),

    handleClick() {
      this.github = "";
      this.closeLoginForm();
    },

    handleSearch() {
      this.loadUserFromGithub(this.github).catch((err) => {
        this.setNotification({ message: err.message, type: "negative" });
      });
    },
  },
};
</script>

<style lang="scss">
.base-login {
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 4rem;
  z-index: 5;
  width: 100%;
  background-color: #2d415b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  align-items: flex-start;
  transform: translateY(-150%);
  transition: transform 0.3s ease-in-out;

  .input {
    flex: 1;
    margin-right: 2rem;
  }

  &__close {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  &__content {
    display: flex;
    width: 100%;
  }

  &--active {
    transform: translateY(0);
  }
}
</style>
