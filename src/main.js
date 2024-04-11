import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@/assets/styles/app.scss";

library.add(fas, far);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
