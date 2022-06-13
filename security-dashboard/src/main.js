import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope,
  faGauge,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faUndo,
  faStar,
  faEnvelope,
  faGauge
);

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_GMAPS_API_KEY,
    },
  })
  .mount("#app");
