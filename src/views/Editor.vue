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

      <button class="button" @click="exportCodeFile">Exportar código</button>
    </div>

    <div class="editor-view__form">
      <p class="editor-view__form-title">Seu projeto</p>

      <input
        v-model="model.name"
        class="input"
        type="text"
        placeholder="Nome do seu projeto"
      />

      <textarea
        v-model="model.description"
        class="textarea"
        placeholder="Descrição do seu projeto"
      />

      <div class="editor-view__section">
        <p class="editor-view__form-title">Personalização</p>

        <BaseSelect v-model:value="model.language" :options="languageOptions" />

        <BaseInputColor v-model:color="model.color" />

        <button class="button">Salvar projeto</button>
      </div>

      <div class="editor-view__section">
        <p class="editor-view__form-title">Exportação</p>

        <input
          v-model="exportFileName"
          class="input"
          type="text"
          placeholder="Nome do arquivo"
        />

        <BaseSelect
          v-model:value="exportFormat"
          :options="exportFormatOptions"
        />

        <button class="button" @click="exportAsPng">
          Exportar código em {{ exportFormat }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

import BaseInputColor from "@/components/BaseInputColor.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCodeView from "@/components/BaseCodeView.vue";

import domToImage from "dom-to-image";

const FORMATS_METHODS = {
  png: "toPng",
  jpeg: "toJpeg",
  svg: "toSvg",
};

export default defineComponent({
  name: "EditorView",

  components: { BaseInputColor, BaseSelect, BaseCodeView },

  data: () => ({
    enableHighlight: false,

    model: {
      code: `// Type a text`,
      color: "#6bd1ff",
      name: null,
      description: null,
      language: "js",
    },

    exportFormatOptions: [
      {
        label: "png",
        value: "png",
      },
      {
        label: "jpeg",
        value: "jpeg",
      },
      {
        label: "svg",
        value: "svg",
      },
    ],

    exportFormat: "png",

    exportFileName: "screenshoot",

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
    ...mapMutations(["changeCurrentPage"]),

    handleToggleHighlight() {
      this.enableHighlight = !this.enableHighlight;
    },

    downloadFile(dataUrl) {
      const link = document.createElement("a");
      link.download = `${this.exportFileName}.${this.exportFormat}`;
      link.href = dataUrl;
      link.click();
      link.remove();
    },

    exportAsPng() {
      if (!this.enableHighlight) {
        this.enableHighlight = true;
      }

      this.$nextTick(() => {
        const method = FORMATS_METHODS[this.exportFormat];
        domToImage[method](this.$refs.baseCodeView.$el).then(this.downloadFile);
      });
    },

    exportCodeFile() {
      const language = this.currentLanguage.value;

      this.downloadString(
        this.model.code,
        this.exportFormat,
        `file.${language}`
      );
    },

    downloadString(content, fileType, fileName) {
      // https://gist.github.com/danallison/3ec9d5314788b337b682
      const blob = new Blob([content], { type: fileType });

      const a = document.createElement("a");
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
      }, 1500);
    },
  },

  mounted() {
    this.changeCurrentPage("Editor");
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

    &-title {
      font-size: 1.2rem;
      line-height: 1.8rem;
      margin-bottom: 1.6rem;
      text-transform: uppercase;
    }

    .input {
      margin-bottom: 1.6rem;
    }

    .base-input-color {
      margin-bottom: 1.6rem;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;

    &:not(:first-child) {
      margin-top: 4rem;
    }
  }

  .base-select {
    margin-bottom: 1.6rem;
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

    &__section {
      margin-bottom: 1.6rem;

      .base-select,
      .base-input-color {
        flex: 1;
      }
    }
  }
}

@media screen and (max-width: $max-mobile-breakpoint) {
  .editor-view__section {
    flex-direction: column;

    .base-input-color {
      margin: 1.6rem 0 0;
    }
  }
}
</style>
