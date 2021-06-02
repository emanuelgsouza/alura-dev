<template>
  <div class="base-code-view" :style="{ backgroundColor: backgroundColor }">
    <div class="base-code-view__dots">
      <span class="base-code-view__dot base-code-view__dot--red"></span>
      <span class="base-code-view__dot base-code-view__dot--yellow"></span>
      <span class="base-code-view__dot base-code-view__dot--green"></span>
    </div>
    <pre v-show="highlight">
      <code :class="computedClass" v-html="htmlCode" />
    </pre>

    <textarea
      v-show="!highlight"
      :value="code"
      :readonly="readonly"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);

export default {
  name: "BaseCodeView",

  props: {
    backgroundColor: {
      type: String,
      default: "",
    },

    code: {
      type: String,
      default: "",
    },

    highlight: Boolean,

    language: {
      type: String,
      defauult: "css",
    },

    readonly: Boolean,
  },

  emits: ["update:code"],

  computed: {
    computedClass() {
      return [this.language || ""];
    },
  },

  data: () => ({
    htmlCode: "",
  }),

  methods: {
    handleInput(event) {
      this.$emit("update:code", event.target.value);
    },
  },

  watch: {
    highlight: {
      handler(value) {
        this.$nextTick(() => {
          if (value) {
            const result = hljs.highlight(this.code, {
              language: this.language,
            });
            this.htmlCode = result.value || "";
          }
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.base-code-view {
  background-color: #6bd1ff;
  border-radius: var(--border-radius);
  width: 100%;
  min-height: 366px;
  max-width: 752px;
  padding: 3.2rem;
  position: relative;
  display: flex;

  textarea,
  pre {
    flex: 1;
    background-color: black;
    display: block;
    color: var(--white);
    padding: 5.6rem 1.6rem 1.6rem;
    border: none;
    border-radius: var(--border-radius);
    width: 100%;
    font-size: 1.4rem;
  }

  &__dots {
    display: flex;
    position: absolute;
    top: 4.8rem;
    left: 4.8rem;
  }

  &__dot {
    border-radius: 100%;
    height: 1.2rem;
    width: 1.2rem;
    margin-left: 8px;

    &:first-child {
      margin-left: 0;
    }

    &--red {
      background-color: #ff5f56;
    }

    &--yellow {
      background-color: #ffbd2e;
    }

    &--green {
      background-color: #27c93f;
    }
  }
}
</style>
