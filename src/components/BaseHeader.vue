<template>
  <header class="base-header">
    <BaseLogo />

    <BaseSearch />

    <div class="base-header__right">
      <BaseProfile />

      <BaseIconButton class="menu-button" icon="menu" />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

import BaseLogo from "@/components/BaseLogo";
import BaseSearch from "@/components/BaseSearch";
import BaseProfile from "@/components/BaseProfile";
import BaseIconButton from "@/components/BaseIconButton";

export default defineComponent({
  name: "BaseHeader",

  components: {
    BaseLogo,
    BaseSearch,
    BaseProfile,
    BaseIconButton,
  },
});
</script>

<style lang="scss">
.base-header {
  align-items: center;
  display: flex;

  .menu-button {
    display: none;
  }
}
</style>
