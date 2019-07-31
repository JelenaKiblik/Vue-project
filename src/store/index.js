import Vue from 'vue'
import Vuex from 'vuex'
import shows from './shows'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shows, user, shared
  }
})
