// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import * as firebase from 'firebase'
import VueClip from 'vue-clip'

Vue.use(VueClip)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCFTRYrNP4peQRDO8hsHvJKzkChcd4VnRk',
      authDomain: 'maia-3c299.firebaseapp.com',
      databaseURL: 'https://maia-3c299.firebaseio.com',
      projectId: 'maia-3c299',
      storageBucket: 'gs://maia-3c299.appspot.com',
      messagingSenderId: '183274042782'
    })
    this.$store.dispatch('loadLocations')
  }
})
