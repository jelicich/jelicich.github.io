import Vue from "vue";
import App from "./App.vue";
import "minireset.css/minireset.min.css";
import "@/styles/styles.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
