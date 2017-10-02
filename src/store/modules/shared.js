import * as firebase from 'firebase'

// Initial state
const state = {
  loadedListings: []
}

// getters
const getters = {
  loadedListings (state) {
    return state.loadedListings
  }
}

// Actions
const actions = {
  loadAll ({commit}, payload) {
    firebase.database().ref(payload.location + '/' + payload.listingType + '/').once('value')
    .then((data) => {
      const listings = []
      const obj = data.val()
      for (let key in obj) {
        listings.push({
          id: key,
          title: obj[key].title,
          slug: obj[key].slug,
          status: obj[key].status
        })
      }
      commit('setLoadedListings', listings)
    })
  },
  statusToPublished ({commit}, payload) {
    const newstatus = {
      status: payload.status
    }
    const key = payload.id
    // console.log(status, key)
    return firebase.database().ref(payload.location + '/' + payload.listingType).child(key).update(newstatus)
    .then(() => {
      commit('statusToPublished', payload)
    })
  },
  statusToDraft ({commit}, payload) {
    const newstatus = {
      status: payload.status
    }
    const key = payload.id
    // console.log(status, key)
    return firebase.database().ref(payload.location + '/' + payload.listingType).child(key).update(newstatus)
    .then(() => {
      commit('statusToPublished', payload)
    })
  }
}

// Mutations
const mutations = {
  setLoadedListings (state, payload) {
    state.loadedListings = payload
    // console.log(payload)
  },
  statusToPublished (state, payload) {
    const listing = state.loadedListings.find(listing => {
      return listing.id === payload.id
    })
    if (payload.status) {
      listing.status = payload.status
    }
  },
  statusToDraft (state, payload) {
    const listing = state.loadedListings.find(listing => {
      return listing.id === payload.id
    })
    if (payload.status) {
      listing.status = payload.status
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
