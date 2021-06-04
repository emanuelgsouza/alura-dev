<template>
  <div class="project-detail">
    <div class="project-detail__header" v-if="hasProject">
      <h1 class="project-detail__title">{{ project.name }}</h1>

      <p class="project-detail__description">{{ project.description }}</p>
    </div>

    <div class="project-detail__content" v-if="hasProject">
      <div class="project-detail__code">
        <BaseCodeView
          :background-color="project.color"
          :code="project.code"
          :language="project.language"
          highlight
          ref="baseCodeView"
        />
      </div>

      <div class="project-detail__form">
        <BaseExportImage :element="codeElement" />

        <BaseExportCode
          class="base-export-code"
          :language="project.language"
          :code="project.code"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import BaseExportCode from "@/components/BaseExportCode.vue";
import BaseExportImage from "@/components/BaseExportImage.vue";
import BaseCodeView from "@/components/BaseCodeView.vue";
import { AluraDevModel } from "@/lib/storage";

export default {
  name: "ProjectDetail",

  components: { BaseExportCode, BaseCodeView, BaseExportImage },

  data: () => ({
    project: {},

    codeElement: HTMLElement,
  }),

  computed: {
    hasProject() {
      return this.project.id;
    },
  },

  watch: {
    hasProject(value) {
      if (value) {
        this.$nextTick(() => {
          if (this.$refs.baseCodeView) {
            this.codeElement = this.$refs.baseCodeView.$el;
          }
        });
      }
    },
  },

  methods: {
    ...mapMutations(["changeCurrentPage"]),
  },

  mounted() {
    AluraDevModel.getProject(this.$route.params.id || "").then((project) => {
      this.project = project;
    });

    this.changeCurrentPage("Detalhe");
  },
};
</script>

<style lang="scss">
.project-detail {
  width: 100%;

  &__header {
    color: var(--white);
    margin-bottom: 2rem;
  }

  &__title {
    font-size: 2.1rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 1.6rem;
    opacity: 0.8;
  }

  &__content {
    display: flex;
  }

  &__code {
    width: 100%;
    max-width: 752px;
  }

  &__form {
    display: flex;
    color: var(--white);
    flex: 1;
    flex-direction: column;
    padding: 0 0 0 4rem;
  }

  .base-export-code {
    margin-top: 1.6rem;
  }
}

@media screen and (max-width: $max-tablet-breakpoint) {
  .project-detail {
    &__content {
      flex-direction: column;
    }

    &__code {
      max-width: 100%;
    }

    .base-code-view {
      margin-bottom: 4rem;
      max-width: 100%;
    }

    &__form {
      padding-left: 0;
    }

    .form {
      margin-bottom: 1.6rem;

      .base-select,
      .base-input-color {
        flex: 1;
      }
    }
  }
}
</style>
