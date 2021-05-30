<template>
  <header class="base-header">
    <BaseLogo />

    <BaseSearch />

    <div class="base-header__right">
      <BaseProfile />

      <BaseMenuButton class="menu-button" />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import BaseLogo from "@/components/BaseLogo";
import BaseSearch from "@/components/BaseSearch";
import BaseProfile from "@/components/BaseProfile";
import BaseMenuButton from "@/components/BaseMenuButton";

export default defineComponent({
  name: "BaseHeader",

  components: {
    BaseLogo,
    BaseSearch,
    BaseProfile,
    BaseMenuButton,
  },
});
</script>

<style lang="scss">
.base-header {
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: relative;

  .base-logo {
    padding-right: 3.2rem;
  }

  .menu-button {
    display: none;
  }

  @media screen and (min-width: $max-mobile-breakpoint + 1px) {
    .base-header__right {
      padding-left: 3.2rem;
    }
  }

  @media screen and (min-width: $max-tablet-breakpoint + 1px) {
    .base-logo {
      flex: 0 0 100%;
      max-width: var(--aside-width);
    }
  }

  @media screen and (max-width: $max-tablet-breakpoint) {
    .base-logo {
      max-width: 100%;
    }

    .menu-button {
      display: flex;
    }

    .base-profile {
      display: none;
    }
  }
}
</style>
