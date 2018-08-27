import Vue from "vue";

import store from "./store";
import router from "./router";

import App from "./components/app";

(() =>
  new Vue({
    el: "#main",
    store,
    router,
    render(h) {
      return h(App);
    }
  }))();
