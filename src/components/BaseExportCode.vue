<template>
  <button class="button" @click="exportCodeFile">{{ message }}</button>
</template>

<script lang="ts">
export default {
  name: "BaseExportCode",

  props: {
    message: {
      type: String,
      default: "Exportar código",
    },

    language: String,

    code: String,
  },

  methods: {
    downloadString(content: string, fileName: string): void {
      // https://gist.github.com/danallison/3ec9d5314788b337b682
      const contentType = `text/${this.language}`;
      const blob = new Blob([content], { type: contentType });

      const a = document.createElement("a");
      a.download = fileName;
      a.href = URL.createObjectURL(blob);
      a.dataset.downloadurl = [contentType, a.download, a.href].join(":");
      a.click();
      setTimeout(function () {
        URL.revokeObjectURL(a.href);
      }, 1500);
    },

    exportCodeFile(): void {
      this.downloadString(this.code || "", `file.${this.language}`);
    },
  },
};
</script>
