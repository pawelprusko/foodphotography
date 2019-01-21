import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Lightbox from 'vue-easy-lightbox'

Vue.use(VueLazyload)
Vue.use(Lightbox)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
