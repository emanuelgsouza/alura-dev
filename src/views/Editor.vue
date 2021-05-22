<template>
  <div class="editor-view">
    <div class="editor-view__code">
      <BaseCodeView :background-color="model.color" v-model:code="model.code" />

      <button class="button button--outline">Visualizar com o highlight</button>
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

      <p class="editor-view__form-title">Personalização</p>

      <div class="editor-view__section">
        <BaseSelect v-model:value="model.language" :options="languageOptions" />

        <BaseInputColor v-model:color="model.color" />
      </div>

      <button class="button">Salvar projeto</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BaseInputColor from "@/components/BaseInputColor.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCodeView from "@/components/BaseCodeView.vue";

export default defineComponent({
  name: "EditorView",

  components: { BaseInputColor, BaseSelect, BaseCodeView },

  data: () => ({
    model: {
      code: `
      const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

      const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

      const unfold = (f, seed) => {
        const go = (f, seed, acc) => {
          const res = f(seed)
          return res ? go(f, res[1], acc.concat([res[0]])) : acc
        }
        return go(f, seed, [])
      }`,
      color: "#6bd1ff",
      name: null,
      description: null,
      language: "css",
    },

    languageOptions: [
      {
        label: "CSS",
        value: "css",
      },
      {
        label: "JavaScript",
        value: "js",
      },
      {
        label: "HTML",
        value: "html",
      },
    ],
  }),
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

      &:not(:first-child) {
        margin-top: 4rem;
      }
    }

    .input {
      margin-bottom: 1.6rem;
    }

    .base-input-color {
      margin: 1.6rem 0;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: $max-tablet-breakpoint) {
  .editor-view {
    flex-direction: column;

    .base-code-view {
      margin-bottom: 4rem;
      max-width: 100%;
    }

    &__form {
      padding-left: 0;
    }

    &__section {
      flex-direction: row;
      margin-bottom: 1.6rem;

      .base-select,
      .base-input-color {
        flex: 1;
      }

      .base-input-color {
        margin: 0 0 0 1.6rem;
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
