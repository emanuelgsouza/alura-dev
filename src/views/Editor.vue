<template>
  <div class="editor-view">
    <div class="editor-view__code">
      <BaseCodeView
        :background-color="model.color"
        v-model:code="model.code"
        :language="computedLanguage"
        :highlight="enableHighlight"
        ref="baseCodeView"
      />

      <button class="button button--outline" @click="handleToggleHighlight">
        Visualizar com o highlight
      </button>

      <BaseExportCode :language="model.language" :code="model.code" />
    </div>

    <div class="editor-view__form">
      <form @submit.prevent="handleSubmit" class="form">
        <p class="form-title">Seu projeto</p>

        <input
          required
          v-model="model.name"
          class="input"
          type="text"
          placeholder="Nome do seu projeto"
        />

        <textarea
          required
          v-model="model.description"
          class="textarea"
          placeholder="Descrição do seu projeto"
        />

        <div class="form">
          <p class="form-title">Personalização</p>

          <BaseSelect
            required
            v-model:value="model.language"
            :options="languageOptions"
          />

          <BaseInputColor v-model:color="model.color" />

          <button class="button" type="submit">Salvar projeto</button>
        </div>
      </form>

      <BaseExportImage :element="codeElement" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

import { AluraDevModel } from "@/lib/storage";
import BaseInputColor from "@/components/BaseInputColor.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCodeView from "@/components/BaseCodeView.vue";
import BaseExportCode from "@/components/BaseExportCode.vue";
import BaseExportImage from "@/components/BaseExportImage.vue";

export default defineComponent({
  name: "EditorView",

  components: {
    BaseInputColor,
    BaseSelect,
    BaseCodeView,
    BaseExportCode,
    BaseExportImage,
  },

  data: () => ({
    enableHighlight: false,

    model: {
      code: `// Type a text`,
      color: "#6bd1ff",
      name: null,
      description: null,
      language: "js",
    },

    languageOptions: [
      {
        label: "CSS",
        value: "css",
        language: "css",
      },
      {
        label: "JavaScript",
        value: "js",
        language: "javascript",
      },
      {
        label: "HTML",
        value: "html",
        language: "html",
      },
    ],

    codeElement: HTMLElement,
  }),

  computed: {
    currentLanguage() {
      return this.languageOptions.find(
        (languageOption) => languageOption.value === this.model.language
      );
    },

    computedLanguage() {
      return this.currentLanguage.language;
    },
  },

  methods: {
    ...mapMutations(["changeCurrentPage", "setNotification"]),

    handleToggleHighlight() {
      this.enableHighlight = !this.enableHighlight;
    },

    async handleSubmit() {
      return AluraDevModel.saveProject(this.model).then(() => {
        this.$router.push({
          name: "Community",
        });

        this.setNotification("Projeto salvo");
      });
    },
  },

  mounted() {
    this.changeCurrentPage("Editor");

    this.$nextTick(() => {
      if (this.$refs.baseCodeView) {
        this.codeElement = this.$refs.baseCodeView.$el;
      }
    });
  },
});
</script>

<style lang="scss">
.editor-view {
  display: flex;
  width: 100%;

  &__code {
    width: 100%;
    max-width: 752px;

    .button {
      width: 100%;
      margin-top: 3.2rem;
    }
  }

  &__form {
    display: flex;
    color: var(--white);
    flex: 1;
    flex-direction: column;
    padding: 0 0 0 4rem;
  }
}

@media screen and (max-width: $max-tablet-breakpoint) {
  .editor-view {
    flex-direction: column;

    &__code {
      max-width: 100%;
      margin-bottom: 4rem;
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

@media screen and (max-width: $max-mobile-breakpoint) {
  .form {
    flex-direction: column;

    .base-input-color {
      margin: 1.6rem 0 0;
    }
  }
}
</style>
