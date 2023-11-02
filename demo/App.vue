<script>
import { reactive, ref } from 'vue';
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';
import Detector from 'detect-regex';
export default {
  data() {
    return {
      detector: new Detector(),
    };
  },
  components: {},
  computed: {
    isDarkMode() {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    detect() {
      return this.detector.detect(
        this.detector.patterns.filter((p) => p.source === 'yelp'),
        document.getElementById('inputText').value
      );
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <h2 style="width: 100%">
        <a href="https://github.com/WTFender/detect-regex"
          >WTFender/detect-regex</a
        >
      </h2>
      <br />
      <h3>Pattern Stats</h3>
      <JsonViewer
        style="width: 100%"
        :value="detector.genPatternStats()"
        :expanded="true"
        :expandDepth="1"
        sort
        :theme="isDarkMode ? 'dark' : 'light'"
      />
    </div>
  </header>
  <main style="padding-top: 2rem">
    <div>
      <h3>Paste your text</h3>
      <textarea
        class="dark"
        id="inputText"
        rows="8"
        cols="50"
        style="width: 100%"
      ></textarea>
    </div>
    <div>
      <button type="button" @click="detect()" style="margin-top: 10px">
        Detect
      </button>
    </div>
    <div style="padding-top: 2rem">
      <h3>Patterns detected</h3>
      <JsonViewer
        :value="detector.detection"
        :expanded="true"
        :expandDepth="3"
        sort
        :theme="isDarkMode ? 'dark' : 'light'"
      />
    </div>
  </main>
</template>

<style scoped>
.dark {
  color: #fff;
  background-color: #282c34;
}
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
    place-items: flex-start;
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
