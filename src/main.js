import Vue from 'vue'
import axios from 'axios';


import App from './App.vue'
import router from './router'
import store from './store'


axios.defaults.baseURL = 'https://stock-trader-dbec7.firebaseio.com/users.json';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptorId = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});


axios.interceptors.request.eject(reqInterceptorId);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
