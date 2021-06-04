<template>
  <div class="community-view">
    <BaseProjectCard
      v-for="(project, key) in projects"
      :key="key"
      :project="project"
    />

    <template v-if="!hasProjects">
      <p class="community-view__empty-message">Não há projetos na comunidade</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapMutations } from "vuex";
import BaseProjectCard from "@/components/BaseProjectCard.vue";

import { AluraDevModel } from "@/lib/storage";
import { IProject } from "@/types/interfaces";

export default defineComponent({
  name: "CommunityView",

  components: { BaseProjectCard },

  data: () => ({
    projects: [] as IProject[],
  }),

  computed: {
    hasProjects(): boolean {
      return this.projects.length > 0;
    },
  },

  methods: {
    ...mapMutations(["changeCurrentPage"]),

    loadProjects() {
      AluraDevModel.getProjects().then((projects) => {
        this.projects = projects;
      });
    },
  },

  mounted() {
    this.changeCurrentPage("Community");
  },
});
</script>

<style lang="scss">
.community-view {
  width: 100%;
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: $max-tablet-breakpoint) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__empty-message {
    font-size: 1.8rem;
    color: var(--white);
  }
}
</style>
