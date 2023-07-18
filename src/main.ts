import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

createApp(App).use(store).use(vuetify).use(autoAnimatePlugin).mount("#app");
