import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';
// import notify from './notify'

Vue.config.productionTip = false
Vue.use(Antd)
// notify.test()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')