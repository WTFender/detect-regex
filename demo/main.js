import './assets/main.css'
import JsonViewer from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(JsonViewer)
app.mount('#app')
