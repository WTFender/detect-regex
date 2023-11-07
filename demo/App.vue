<script>
import { reactive, ref } from 'vue';
import { JsonViewer } from 'vue3-json-viewer';
import 'vue3-json-viewer/dist/index.css';
import Detector from 'detect-regex';
export default {
  created() {
    const detector = new Detector(true);
    const sources = [];
    const tags = [];
    Object.keys(detector.sources).forEach(function (key) {
      sources.push({
        ...detector.sources[key],
        id: key,
        checked: false,
      });
    });
    const patternTags = detector.genPatternStats().patternTags;
    Object.keys(patternTags).forEach(function (key) {
      tags.push({
        id: key,
        count: patternTags[key],
        checked: false,
      });
    });
    this.detector = detector;
    this.sources = sources;
    this.tags = tags;
  },
  data() {
    return {
      detector: {},
      tags: [],
      sources: [],
      detection: {},
      searchPatternId: '',
    };
  },
  components: {},
  computed: {
    searchPatternResult() {
      return (
        this.detector.patterns.find((p) => p.id === this.searchPatternId) ||
        'Select a pattern ID'
      );
    },
    selectedSourceIds() {
      return this.sources.filter((s) => s.checked).map((s) => s.id);
    },
    selectedTagIds() {
      return this.tags.filter((t) => t.checked).map((t) => t.id);
    },
    selectedPatterns() {
      const sourcePatternIds = this.detector.patterns
        .filter((p) => this.selectedSourceIds.includes(p.source))
        .map((p) => p.id);
      const tagPatternIds = this.detector.patterns
        .filter(
          (p) =>
            'tags' in p && p.tags.some((t) => this.selectedTagIds.includes(t))
        )
        .map((p) => p.id);
      const patternIds = [...new Set(sourcePatternIds.concat(tagPatternIds))];
      return patternIds.map((pid) => this.detector.getPatternById(pid));
    },
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
      console.log(`detecting patterns`);
      this.detection = this.detector.detect(
        this.selectedPatterns,
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
      <h3 style="margin-top: 20px">Pattern Inspector</h3>
      <input
        id="patternSearch"
        style="margin-top: 10px; width: 100%"
        list="patterns"
        placeholder="Search patterns..."
        v-model="searchPatternId"
        clearable
      />
      <datalist id="patterns">
        <option
          v-for="p in detector.patterns.sort((a, b) =>
            a.name.localeCompare(b.name)
          )"
          :label="p.name"
          :value="p.id"
        />
      </datalist>
      <JsonViewer
        style="width: 100%"
        :value="searchPatternResult"
        :expanded="true"
        :expandDepth="1"
        sort
        :theme="isDarkMode ? 'dark' : 'light'"
      />
    </div>
  </header>
  <main style="padding-top: 2rem">
    <div>
      <h3>1. Paste text</h3>
      <br />
      <textarea
        class="dark"
        id="inputText"
        rows="8"
        cols="50"
        style="width: 100%"
      ></textarea>
    </div>
    <h3 style="margin-top: 20px">
      2. Select patterns {{ `(${selectedPatterns.length})` }}
    </h3>
    <form>
      <div style="float: left; margin-right: 50px">
        <br />
        <h4>Sources</h4>
        <div v-for="s in sources.sort((a, b) => a.name.localeCompare(b.name))">
          <input
            type="checkbox"
            :id="s.name"
            v-model="s.checked"
            style="margin-right: 10px"
          />
          <a
            :href="s.ref.startsWith('https') ? s.ref : null"
            :style="{ color: !s.ref.startsWith('https') ? 'inherit' : '' }"
          >
            {{ `${s.name} (${s.count})` }}
          </a>
        </div>
      </div>
      <div>
        <br />
        <h4>Tags</h4>
        <div
          v-for="t in tags
            .sort((a, b) => b.count - a.count)
            .slice(0, sources.length)"
        >
          <input
            type="checkbox"
            :id="`${t.id}-cbox`"
            v-model="t.checked"
            style="margin-right: 10px"
          />
          <label :for="`${t.id}-cbox`">{{ `${t.id} (${t.count})` }}</label>
        </div>
      </div>
    </form>
    <div>
      <button
        type="button"
        @click="detect()"
        style="margin-top: 50px; width: 60%; margin-left: 20%; height: 80px"
        :disabled="selectedPatterns.length === 0"
      >
        <h2>Detect</h2>
      </button>
    </div>
    <div style="padding-top: 2rem">
      <h3 v-if="detection.patterns">Patterns detected</h3>
      <JsonViewer
        v-if="detection.patterns"
        :value="detection"
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
button:disabled {
  cursor: not-allowed;
}
button:not(:disabled) {
  color: #fff;
  background-color: hsla(160, 100%, 37%, 1);
}
button:not(:disabled):hover {
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
