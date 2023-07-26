import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "~/utils/router.ts";
import "~/utils/firebase.ts";
import "~/assets/styles/tailwind.css";

createApp(App).use(router).use(createPinia()).mount("#app");
