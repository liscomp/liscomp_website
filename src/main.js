import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import "./plugins/academicons";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Popper from "popper.js";
global.Popper = Popper;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
