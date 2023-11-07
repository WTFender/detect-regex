<script>
import { reactive, ref } from "vue";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import Detector from "detect-regex";
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
    this.patternStats = this.detector.genPatternStats();
  },
  data() {
    return {
      patternStats: {},
      detector: {},
      tags: [],
      sources: [],
      detection: {},
      searchPatternId: "",
      exampleAws: "AKIA2PEFT43H6DEVN475",
      exampleSlack:
        "https://hooks.slack.com/services/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",
      exampleKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCthNauXQdklTvXltFgzWGY5M5vSnfVVGpRFok4QXNNpVYFn4yC
E5Y3gZ/fArZ73CAIExf48F/pIlMnQbjKQn4TXhKmAEVQ8+nujm+9vk96yqotwPRI
A/fEPF6JOIqnG2NYuk8DJfN0Tvlrchyw48uPHeL3frT73wK06DSltX17QQIDAQAB
AoGAeE3HgnChdY06Rkkctd7vsc/BiMu6tb+nTr0vOj+2r7jYIWHzSyRFXAqVS0tY
NhvyYWbLkh8mgD76JBefBSyAt8lhsk8Dkt3HVSscZZOWP//lF8U4+rAOeaoARabs
U64VYJlGtiJjrMPVYTHGvcrWqon78aBCvwOZr5Ein2p+wPkCQQD0dPXd/+V7kBst
WgYLNRlHHiZImOedMVP0m8VlnprYVvSmx7UGK8u5aNp/vp1HICp2JnNm3/iH67jJ
6qPADDsfAkEAtbZd7ddjMRQ6g4AEWGg2Rv9QpLcZc6Ag7XsrXBmc2hSAB1zlNj/k
2UvkgSVd3wN097+bC4lXLybVHWL2oMXdnwJARpwqEI/Dx2cekoD4UfBqdsJcqIeS
DzOaXoNIB0xCyc6EKFBzF287DzkcM93pLAw8d5gvqT10Wj5aR+iAmA5wXQJAAanh
wkOujMx6nKmXYJfTp2K/AkMK4JwesQ3nn7g8T2LQqUCYeJ6tIbAoL2aALYKCl6IR
cVGYkr3wRYyaZW5qUQJAPhBPmyM/h5nOylvLCPNf2OXbZIduGJf3/VZBQCuRRNCv
FsLhwvxvOoX0Gm7Fx/esX3eyjGggRJhARFrvetKm/A==
-----END RSA PRIVATE KEY-----`,
    };
  },
  components: {},
  computed: {
    searchPatternResult() {
      const p = this.detector.patterns.find((p) => p.id === this.searchPatternId);
      if (p) {
        // replace regex pattern with string
        return { ...p, pattern: p.pattern.source };
      }
      return "Select a pattern ID";
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
        .filter((p) => "tags" in p && p.tags.some((t) => this.selectedTagIds.includes(t)))
        .map((p) => p.id);
      const patternIds = [...new Set(sourcePatternIds.concat(tagPatternIds))];
      return patternIds.map((pid) => this.detector.getPatternById(pid));
    },
    isDarkMode() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    setExample(ex) {
      const examples = {
        aws: this.exampleAws,
        slack: this.exampleSlack,
        generic: this.exampleKey,
      };
      this.tags.forEach((t) => (t.id === ex ? (t.checked = true) : (t.checked = false)));
      document.getElementById("inputText").value = examples[ex];
    },
    detect() {
      console.log(`detecting patterns`);
      this.detection = this.detector.detect(
        this.selectedPatterns,
        document.getElementById("inputText").value
      );
      if (this.detection.matches.length > 0) {
        this.searchPatternId = this.detection.matches[0].id;
      }
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <h2 style="width: 100%">
        <a href="https://github.com/WTFender/detect-regex">WTFender/detect-regex</a>
      </h2>
      <p>Detect sensitive regular expressions in unstructured text.</p>
      <div style="margin-top: 50px; width: 100%;">
        <span class="badge">{{ patternStats.numPatterns }}</span> Patterns across
        <span class="badge">{{ Object.keys(patternStats.patternSources).length }}</span>
        sources containing
        <span class="badge">{{ Object.keys(patternStats.patternTags).length }}</span>
        tags.
      </div>
      <h3 style="margin-top: 50px">Browse patterns</h3>
      <input
        id="patternSearch"
        style="margin-top: 10px; width: 100%"
        list="patterns"
        placeholder="Select pattern ID..."
        v-model="searchPatternId"
      />
      <datalist id="patterns">
        <option
          v-for="p in detector.patterns.sort((a, b) => a.name.localeCompare(b.name))"
          :label="p.name"
          :value="p.id"
        />
      </datalist>
      <JsonViewer
        style="width: 100%"
        :value="searchPatternResult"
        :previewMode="true"
        sort
        :theme="isDarkMode ? 'dark' : 'light'"
      />
    </div>
  </header>
  <main style="padding-top: 50px;">
    <div>
      <h3>1. Paste text</h3>
      Examples: <a @click="setExample('generic')">Private Key</a>,
      <a @click="setExample('aws')">AWS Access Key ID</a>,
      <a @click="setExample('slack')">Slack Webhook</a>
      <br />
      <textarea
        class="dark"
        id="inputText"
        rows="8"
        cols="50"
        style="width: 100%"
      ></textarea>
    </div>
    <h3 style="margin-top: 50px">
      2. Select patterns <span class="badge-inactive">{{ selectedPatterns.length }}</span>
    </h3>
    <form>
      <div style="float: left; margin-right: 20px">
        <br />
        <h4>Tags</h4>
        <div v-for="t in tags.sort((a, b) => b.count - a.count).slice(0, 10)">
          <input
            type="checkbox"
            :id="`${t.id}-cbox`"
            v-model="t.checked"
            style="margin-right: 10px"
          />
          <label :for="`${t.id}-cbox`">{{ `${t.id} (${t.count})` }}</label>
        </div>
      </div>
      <div style="float: left; margin-right: 20px">
        <br />
        <h4>&nbsp;</h4>
        <div v-for="t in tags.sort((a, b) => b.count - a.count).slice(10, 20)">
          <input
            type="checkbox"
            :id="`${t.id}-cbox`"
            v-model="t.checked"
            style="margin-right: 10px"
          />
          <label :for="`${t.id}-cbox`">{{ `${t.id} (${t.count})` }}</label>
        </div>
      </div>
      <div>
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
.badge, .badge-inactive {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
.badge-inactive {
  background-color: inherit;
  color: inherit;
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
