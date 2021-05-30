import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/styles/variables.css";
import "@/assets/styles/minireset.css";
import "@/assets/styles/general.css";
import "@/assets/styles/dracula-theme.css";

createApp(App).use(store).use(router).mount("#app");
