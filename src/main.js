import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import "./plugins/academicons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  document.title = to.params.title || to.meta.title;
  next();
});

import $ from "jquery";

$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
    }
  });
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
