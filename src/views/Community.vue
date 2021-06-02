<template>
  <div class="community-view">
    <BaseProjectCard
      v-for="(project, key) in projects"
      :key="key"
      :project="project"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseProjectCard from "@/components/BaseProjectCard.vue";

const testCode = `function helloWorld() {
  console.log("Hello World");
}`;

export default defineComponent({
  name: "CommunityView",

  components: { BaseProjectCard },

  data: () => ({
    projects: [
      {
        name: "Titulo do projeto",
        description: "Essa é a descrição do meu projeto.",
        language: "javascript",
        code: testCode,
        color: "#9AFF6B",
        comments: 9,
        hearts: 30,
      },
      {
        name: "Titulo do projeto",
        description: "Essa é a descrição do meu projeto.",
        language: "javascript",
        code: testCode,
        color: "#6B83FF",
        comments: 9,
        hearts: 30,
      },
      {
        name: "Titulo do projeto",
        description: "Essa é a descrição do meu projeto.",
        language: "javascript",
        code: testCode,
        color: "#FFC46B",
        comments: 9,
        hearts: 30,
      },
      {
        name: "Titulo do projeto",
        description: "Essa é a descrição do meu projeto.",
        language: "javascript",
        code: testCode,
        color: "#FF6BCD",
        comments: 9,
        hearts: 30,
      },
    ],
  }),
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
}
</style>
