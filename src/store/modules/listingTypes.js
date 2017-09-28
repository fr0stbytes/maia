import * as firebase from 'firebase'

// Initial state
const state = {
  loadedListingTypes: []
}

// Getters
const getters = {
  loadedListingTypes (state) {
    return state.loadedListingTypes
  }
}

// Actions
const actions = {
  createListingType ({commit}, payload) {
    const listingType = {
      title: {en: payload.titleEn, gr: payload.titleGr},
      listingTypeSlug: {en: payload.slugEn, gr: payload.slugGr},
      listingTypeIcon: payload.icon
    }
    firebase.database().ref(payload.locationSlug + '/listing_types').push(listingType)
      .then((data) => {
        commit('createListingType', listingType)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  loadListingTypes ({commit}, payload) {
    firebase.database().ref(payload.locationSlug + '/listing_types').once('value')
      .then((data) => {
        const types = []
        const obj = data.val()
        for (let key in obj) {
          types.push({
            id: key,
            title: obj[key].title,
            listingTypeSlug: obj[key].listingTypeSlug,
            listingTypeIcon: obj[key].listingTypeIcon
          })
        }
        commit('setLoadedListingTypes', types)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Mutations
const mutations = {
  createListingType (state, payload) {
    state.loadedListingTypes.push(payload)
  },
  setLoadedListingTypes (state, payload) {
    state.loadedListingTypes = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
