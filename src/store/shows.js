import * as fb from 'firebase'

class Show {
  constructor (title, description, ownerId, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.id = id
  }
}

export default {
  state: {
    shows: []
  },
  mutations: {
    createShow (state, payload) {
      state.shows.push(payload)
    },
    loadShows (state, payload) {
      state.shows = payload
    }
  },
  actions: {
    async createShow ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newShow = new Show(
          payload.title,
          payload.description,
          getters.user.id
        )

        const show = await fb.database().ref('shows').push(newShow)

        commit('setLoading', false)
        commit('createShow', {
          ...newShow,
          id: show.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchShows ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultShows = []

      try {
        const fbVal = await fb.database().ref('shows').once('value')
        const shows = fbVal.val()

        Object.keys(shows).forEach(key => {
          const show = shows[key]
          resultShows.push(
            new Show(show.title, show.description, show.ownerId, key)
          )
        })

        commit('loadShows', resultShows)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    shows (state) {
      return state.shows
    },
    myShows (state) {
      return state.shows
    },
    showById (state) {
      return showId => {
        return state.shows.find(show => show.id === showId)
      }
    }
  }
}
