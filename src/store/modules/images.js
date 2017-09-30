import * as firebase from 'firebase'
import _ from 'lodash'

// Initial state
const state = {
  loadedImages: []
}

// getters
const getters = {
  loadedImages (state) {
    return state.loadedImages
  }
}

// Actions
const actions = {
  uploadImage ({commit}, payload) {
    const filesToUpload = payload
    const filesIdx = _.range(payload.length)
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx])
      const upload = {
        file: filesToUpload[idx],
        name: filesToUpload[idx].name
      }
      console.log(upload)
      return firebase.storage().ref('images/').child(`/${upload.name}`)
      .put(upload.file)
      .then(fileData => {
        const image = {
          url: fileData.metadata.downloadURLs[0],
          name: fileData.metadata.name
        }
        firebase.database().ref('images').push(image)
        .then((data) => {
          const key = data.key
          commit('createImage', {
            ...image,
            id: key
          })
        })
      })
    })
  },

  // View Categories from DB
  loadImages ({commit}, payload) {
    // const listingType = payload.listingType
    firebase.database().ref('/images').once('value')
      .then((data) => {
        const images = []
        const obj = data.val()
        for (let key in obj) {
          images.push({
            id: key,
            name: obj[key].name,
            url: obj[key].url
          })
        }
        commit('setLoadedImages', images)
        console.log(images)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Mutations
const mutations = {
  uploadImage (state, payload) {
    state.loadedImages.push(payload)
  },
  setLoadedImages (state, payload) {
    state.loadedImages = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
