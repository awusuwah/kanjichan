import { createRouter, createWebHistory } from "vue-router";

import Login from "~/pages/Login.vue";
import CreateAccount from "~/pages/CreateAccount.vue";
import Profile from "~/pages/Profile.vue";

// Create a new router instance
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login },
    { path: "/create-account", component: CreateAccount },
    { path: "/profile", component: Profile },
  ],
});
