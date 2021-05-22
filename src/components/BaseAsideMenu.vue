<template>
  <aside
    class="base-aside-menu"
    :class="{ 'base-aside-menu--active': isSidebarOpen }"
  >
    <p class="base-aside-menu__title">Menu</p>

    <ul>
      <li>
        <router-link
          to="/editor"
          class="base-aside-menu__item"
          active-class="base-aside-menu__item--active"
        >
          <span class="base-aside-menu__icon">
            <BaseIcon icon="editor" />
          </span>

          <span>Editor de Código</span>
        </router-link>
      </li>

      <li>
        <router-link
          to="/community"
          class="base-aside-menu__item"
          active-class="base-aside-menu__item--active"
        >
          <span class="base-aside-menu__icon">
            <BaseIcon icon="community" />
          </span>

          <span>Comunidade</span>
        </router-link>
      </li>
    </ul>

    <hr />

    <BaseProfile />
  </aside>
</template>

<script>
import BaseIcon from "@/components/BaseIcon";
import BaseProfile from "@/components/BaseProfile";
import { mapGetters } from "vuex";

export default {
  name: "BaseAsideMenu",

  components: { BaseIcon, BaseProfile },

  computed: {
    ...mapGetters(["isSidebarOpen"]),
  },
};
</script>

<style lang="scss">
.base-aside-menu {
  --menu-color: 80, 129, 251;

  color: var(--white);

  &__title {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }

  &__item {
    align-items: center;
    display: flex;
    margin-top: 1.6rem;
    font-size: 1.6rem;
    opacity: 0.56;

    &--active {
      opacity: 1;
    }
  }

  &__icon {
    background-color: rgba(var(--menu-color), 0.16);
    border-radius: calc(var(--border-radius) * 2);
    height: 4.8rem;
    margin-right: 1.6rem;
    width: 4.8rem;

    @include centerUsingFlex();
  }

  &__item:hover &__icon {
    background-color: rgba(var(--menu-color), 0.64);
  }

  &__item--active &__icon {
    background-color: rgba(var(--menu-color), 1);
  }

  .base-profile,
  hr {
    display: none;
  }

  @media screen and (max-width: $max-tablet-breakpoint) {
    .base-profile,
    hr {
      display: flex;
      width: 100%;
    }

    hr {
      margin: 2.4rem 0;
    }

    & {
      background-color: #2d415b;
      padding: 2.4rem;
      border-radius: var(--border-radius);
      position: absolute;
      height: 100%;
      max-height: 100vh;
      right: 0;
      top: 0;
      transition: transform 0.3s ease-in-out;
      transform: translateX(130%);
      z-index: 5;
    }

    &--active {
      transform: translateX(0);
    }
  }
}
</style>
