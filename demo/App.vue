<script>
import { reactive, ref, setTransitionHooks } from 'vue';
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
    this.patternStats = this.detector.genPatternStats();
    this.randomPattern();
  },
  data() {
    return {
      patternStats: {},
      detector: {},
      tags: [],
      sources: [],
      detection: {},
      searchPatternId: '',
      exampleAws: 'AKIA2PEFT43H6DEVN475',
      exampleSlack:
        'https://hooks.slack.com/services/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',
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
      const p = this.detector.patterns.find(
        (p) => p.id === this.searchPatternId
      );
      if (p) {
        // replace regex pattern with string
        return {
          ...p,
          pattern: p.pattern.source,
          source: this.detector.sources[p.source],
        };
      }
      return '';
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
    prettyMatch(m) {
      const pattern = this.detector.getPatternById(m.id);
      return {
        match: m.match,
        line: m.line,
        column: m.column,
        pattern: {
          ...pattern,
          source: this.detector.sources[pattern.source],
        },
      };
    },
    randomPattern() {
      const patternIds = this.detector.patterns.map((p) => p.id);
      const randomPatternId =
        patternIds[Math.floor(Math.random() * patternIds.length)];
      this.searchPatternId = randomPatternId;
    },
    setExample(ex) {
      const examples = {
        aws: this.exampleAws,
        slack: this.exampleSlack,
        generic: this.exampleKey,
        mix: `${this.exampleAws}\n${this.exampleSlack}\n${this.exampleKey}`,
      };
      this.tags.forEach((t) =>
        ['aws', 'generic', 'slack'].includes(t.id)
          ? (t.checked = true)
          : (t.checked = false)
      );
      document.getElementById('inputText').value = examples[ex];
      this.detect();
    },
    detect() {
      console.log(`detecting patterns`);
      const detection = this.detector.detect(
        this.selectedPatterns,
        document.getElementById('inputText').value
      );
      this.detection = {
        patterns: detection.patterns,
        matches: [...detection.matches.map((m) => ({ ...m, expanded: false }))],
      };
    },
  },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <h2 style="width: 100%">
        <a href="https://github.com/WTFender/detect-regex" target="_blank"
          >WTFender/detect-regex</a
        >
      </h2>
      <p>Detect sensitive regular expressions in unstructured text.</p>
      <div style="margin-top: 2rem; width: 100%">
        <span class="badge">{{ patternStats.numPatterns }}</span> Patterns
        across
        <span class="badge">{{
          Object.keys(patternStats.patternSources).length
        }}</span>
        sources containing
        <span class="badge">{{
          Object.keys(patternStats.patternTags).length
        }}</span>
        tags.
      </div>
      <h3 style="margin-top: 2rem">
        Browse patterns
        <span class="dice" @click="randomPattern()" style="cursor: pointer"
          >🎲</span
        >
      </h3>
      <input
        id="patternSearch"
        type="search"
        style="margin-top: 10px; width: 100%; height: 2rem"
        list="patterns"
        placeholder="Select pattern ID..."
        v-model="searchPatternId"
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
        v-if="searchPatternId !== ''"
        style="width: 100%"
        :value="searchPatternResult"
        :previewMode="true"
        :theme="isDarkMode ? 'dark' : 'light'"
      />
    </div>
  </header>
  <main style="padding-top: 2rem">
    <div>
      <h3>1. Paste text</h3>
      <div style="margin-left: 2rem; margin-top: 1rem">
        Examples:
        <a style="cursor: pointer" @click="setExample('generic')">Private Key</a
        >,
        <a style="cursor: pointer" @click="setExample('aws')"
          >AWS Access Key ID</a
        >,
        <a style="cursor: pointer" @click="setExample('slack')">Slack Webhook</a
        >,
        <a style="cursor: pointer" @click="setExample('mix')">Mixed</a>
        <br />
        <textarea
          @input="detect()"
          :class="{ dark: isDarkMode }"
          id="inputText"
          rows="8"
          cols="50"
          style="width: 100%"
        ></textarea>
      </div>
    </div>
    <h3 style="margin-top: 2rem">2. Select patterns</h3>
    <form style="margin-left: 2rem; margin-top: 1rem">
      <div style="float: left; margin-right: 20px">
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
        <h4>&nbsp;</h4>
        <div v-for="t in tags.sort((a, b) => b.count - a.count).slice(10, 20)">
          <input
            type="checkbox"
            :id="`${t.id}-cbox`"
            v-model="t.checked"
            style="margin-right: 10px"
            @change="detect()"
          />
          <label :for="`${t.id}-cbox`">{{ `${t.id} (${t.count})` }}</label>
        </div>
      </div>
      <div>
        <h4>Sources</h4>
        <div v-for="s in sources.sort((a, b) => a.name.localeCompare(b.name))">
          <input
            type="checkbox"
            :id="s.name"
            v-model="s.checked"
            style="margin-right: 10px"
            @change="detect()"
          />
          <a
            :href="s.ref.startsWith('https') ? s.ref : null"
            target="_blank"
            :style="{ color: !s.ref.startsWith('https') ? 'inherit' : '' }"
          >
            {{ `${s.name} (${s.count})` }}
          </a>
        </div>
      </div>
    </form>
    <br />
    <div style="text-align: center; margin-top: 4rem">
      <span class="badge-inactive"></span>
      {{ selectedPatterns.length }} patterns selected from
      {{ selectedSourceIds.length }} sources and
      {{ selectedTagIds.length }} tags.
    </div>
    <div style="margin-top: 2rem; width: 100%">
      <h3>
        3. Check detections
        <span class="badge" v-if="detection.matches?.length > 0">{{
          detection.matches.length
        }}</span>
      </h3>
      <div style="margin-left: 2rem; margin-top: 1rem">
        <div v-if="selectedPatterns.length === 0">No patterns selected.</div>
        <div v-else-if="detection.matches.length === 0">No detections.</div>
        <div
          v-else
          v-for="(m, idx) in detection.matches"
          style="overflow: hidden; margin-bottom: 5px"
          @click="
            detection.matches[idx].expanded = !detection.matches[idx].expanded
          "
          class="detection"
          :class="{ dark: isDarkMode }"
        >
          <p style="padding: 10px; font-weight: bold; overflow: hidden">
            {{ detector.getPatternById(m.id).name }}
            <span
              v-if="detector.getPatternById(m.id).confidence"
              class="badge-small"
              :style="{
                float: 'right',
                'margin-left': '.5rem',
                'background-color':
                  detector.getPatternById(m.id).confidence === 'high'
                    ? 'red'
                    : 'orange',
              }"
            >
              {{ detector.getPatternById(m.id).confidence }}
            </span>
            <span
              v-for="t in detector.getPatternById(m.id).tags"
              class="badge-small"
              style="margin-left: 0.5rem; float: right"
            >
              {{ t }}
            </span>
            <br />
            <a
              :href="
                detector.sources[detector.getPatternById(m.id).source]?.ref
              "
              target="_blank"
              style="float: right"
              >{{
                detector.sources[detector.getPatternById(m.id).source]?.name
              }}</a
            >
            <span
              class="badge-small badge-square"
              style="background-color: rgb(86, 99, 112)"
            >
              Ln {{ m.line }}
            </span>
            <span class="badge-small badge-square"> Col {{ m.column }} </span>
            <span
              class="badge-small badge-square"
              style="background-color: transparent"
            >
              {{
                m.match.length < 32 ? m.match : m.match.substring(0, 32) + '...'
              }}
            </span>
          </p>
          <div v-show="m.expanded">
            <JsonViewer
              style="margin: 0px; padding: 0px"
              :value="prettyMatch(m)"
              :previewMode="true"
              sort
              :theme="isDarkMode ? 'dark' : 'light'"
            />
          </div>
        </div>
      </div>
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
.badge,
.badge-small,
.badge-inactive {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
}
.badge-inactive {
  background-color: inherit;
  color: inherit;
}
.badge-small {
  background-color: lightslategray;
  font-size: x-small;
  margin: 0px;
  padding: 0px 10px;
}
.badge-square {
  border-radius: 0px;
  padding: 0px 2px;
  font-weight: bold;
}

.detection {
  cursor: pointer;
  border-radius: 8px;
  border: solid transparent;
}
.detection:hover {
  border: solid hsla(160, 100%, 37%, 1);
}

.dice:hover {
  color: #fff;
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
