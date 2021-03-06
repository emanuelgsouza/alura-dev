<template>
  <div class="community-view">
    <BaseProjectCard
      v-for="(project, key) in projects"
      :key="key"
      :project="project"
      minified
    />

    <template v-if="!hasProjects">
      <p class="community-view__empty-message">{{ emptyMessage }}</p>
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

    onSearch(): boolean {
      return this.$route.meta.search as boolean;
    },

    searchValue(): string | undefined {
      if (this.onSearch) {
        return this.$route.query.search as string;
      }

      return undefined;
    },

    emptyMessage(): string {
      if (this.onSearch) {
        return `Não há resultados para a sua pesquisa ${this.searchValue}`;
      }

      return "Não há projetos na comunidade";
    },
  },

  watch: {
    $route: "loadProjects",
  },

  methods: {
    ...mapMutations(["changeCurrentPage"]),

    loadProjects() {
      AluraDevModel.getProjects(this.searchValue).then((projects) => {
        this.projects = projects;
      });
    },
  },

  mounted() {
    this.changeCurrentPage("Community");

    this.loadProjects();
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
      display: block;
    }

    .base-project-card {
      max-width: 100%;
      margin-bottom: 2.4rem;
    }

    .base-project-card:last-child {
      margin-bottom: 0;
    }
  }

  &__empty-message {
    font-size: 1.8rem;
    color: var(--white);
  }
}
</style>
