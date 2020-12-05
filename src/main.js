import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import { Lazyload } from "vant";
import "vant/lib/index.css";
import FastClick from "fastclick";
FastClick.attach(document.body);
import "@/assets/css/reset.css";
import "@/assets/css/border.css";
import "@/assets/css/index.css";
import globalVariable from "./pages/Login/log.js";

require("./utils/adapter")(document, window);

Vue.prototype.global = globalVariable;
Vue.prototype.change_log_state = function(s) {
  this.global.log_state = s;
};
Vue.prototype.change_log_id = function(s) {
  this.global.log_id = s;
};

Vue.prototype.set = function() {
  window.localStorage.setItem("log_state", this.global.log_state);
  window.localStorage.setItem("log_id", this.global.log_id);
};
Vue.prototype.get = function() {
  this.global.log_state = window.localStorage.getItem("log_state");
  this.global.log_id = window.localStorage.getItem("log_id");
};

Vue.use(Lazyload);
Vue.use(Vant);

Vue.config.productionTip = false;
// 定义全局过滤器
Vue.filter("toFixed", function(value) {
  return Number(value).toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
