import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/route";
import { store, key } from "./store";

const app = createApp(App);

app.use(store, key);
app.use(router);

app.mount("#app");
