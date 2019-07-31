import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDFZMhJ0QDzXmjg-Lav0DTt8E8bLEozZN8',
      authDomain: 'watershows-project.firebaseapp.com',
      databaseURL: 'https://watershows-project.firebaseio.com',
      projectId: 'watershows-project',
      storageBucket: '',
      messagingSenderId: `796455291368`,
      appId: `1:796455291368:web:77e0dd50ceb1b61f`
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
