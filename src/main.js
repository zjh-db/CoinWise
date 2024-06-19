import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import * as utils from "@/utils";
import * as dicts from "@/utils/dicts";
import router from "@/router";
import initVant from "@/vant";

const app = createApp(App);
app.use(router);
initVant(app);

app.config.globalProperties = { utils, dicts };

app.mount("#app");
