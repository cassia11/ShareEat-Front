import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue);
Vue.config.productionTip = false
//axios.defaults.baseURL = (env === 'development') ? 'https://localhost:3000/api/v1' : 'https://shareeat.com/api/v1';
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});