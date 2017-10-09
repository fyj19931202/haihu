// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

function calcRem() {
    var html = document.querySelector('html')
    var width = document.documentElement.clientWidth
    var ui = 360
    html.style.fontSize = width / ui * 20 + 'px'
}
calcRem()
window.onresize = function() {
    calcRem()
}