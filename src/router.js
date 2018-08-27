import Vue from "vue";
import VueRouter from "vue-router";

import Page from "./components/Page";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{ path: "/pages/:id", component: Page }]
});
