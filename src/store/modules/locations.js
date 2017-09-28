import * as firebase from 'firebase'

// Initial state
const state = {
  loadedLocations: []
}

// Getters
const getters = {
  loadedLocations (state) {
    return state.loadedLocations
  }
}

// actions
const actions = {
  createLocation ({commit}, payload) {
    const location = {
      title: {en: payload.titleEn, gr: payload.titleGr},
      slug: {en: payload.slugEn, gr: payload.slugGr}
    }
    let imageUrl
    let key
    firebase.database().ref('locations').push(location)
      .then((data) => {
        key = data.key
        return key
      })
      .then(key => {
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return firebase.storage().ref('locations/thumbnail_img/' + key + ext).put(payload.image)
      })
      .then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0]
        return firebase.database().ref('locations').child(key).update({imageUrl: imageUrl})
      })
      .then(() => {
        commit('createLocation', {
          ...location,
          imageUrl: imageUrl,
          id: key
        })
      })
    .catch((error) => {
      console.log(error)
    })
  },
  // View locations from DB
  loadLocations ({commit}) {
    firebase.database().ref('locations').once('value')
      .then((data) => {
        const locations = []
        const obj = data.val()
        for (let key in obj) {
          locations.push({
            id: key,
            title: obj[key].title,
            slug: obj[key].slug,
            imageUrl: obj[key].imageUrl
          })
        }
        commit('setLoadedLocations', locations)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Mutations
const mutations = {
  createLocation (state, payload) {
    state.loadedLocations.push(payload)
  },
  setLoadedLocations (state, payload) {
    state.loadedLocations = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
