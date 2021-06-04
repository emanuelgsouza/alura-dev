<template>
  <div class="form">
    <p class="form-title">Exportação</p>

    <input
      v-model="exportFileName"
      class="input"
      type="text"
      placeholder="Nome do arquivo"
    />

    <BaseSelect v-model:value="exportFormat" :options="exportFormatOptions" />

    <button class="button" @click="exportAsPng">
      Exportar código em {{ exportFormat }}
    </button>
  </div>
</template>

<script>
import domToImage from "dom-to-image";

import BaseSelect from "./BaseSelect.vue";

const FORMATS_METHODS = {
  png: "toPng",
  jpeg: "toJpeg",
  svg: "toSvg",
};

export default {
  name: "BaseExportImage",

  components: { BaseSelect },

  props: ["element"],

  data: () => ({
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
  }),

  methods: {
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
        domToImage[method](this.element).then(this.downloadFile);
      });
    },
  },
};
</script>

<style lang="scss"></style>
