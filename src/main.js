import Vue from 'vue'
import App from './App.vue'



Vue.component("App",App)

new Vue({
  el: '#app',
  render: h => h(App)
})
