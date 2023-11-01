<script setup>
import { reactive, ref } from 'vue';
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';
import Detector from 'detect-regex';
const detector = new Detector();
const stats = detector.genPatternStats();
const data = reactive(stats);

const isDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true;
  }
  return false;
};
</script>

<template>
  <main>
    <a href="https://github.com/WTFender/detect-regex">WTFender/detect-regex</a>
    <JsonViewer
      :value="data"
      :expanded="true"
      :expandDepth="1"
      sort
      :theme="isDarkMode ? 'dark' : 'light'"
    />
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.link {
  cursor: pointer;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
