import * as firebase from 'firebase'
import _ from 'lodash'

// Initial state
const state = {
  loadedRestaurant: []
}

// Getters
const getters = {

}

// Actions
const actions = {
  createRestaurant ({commit}, payload) {
    const restaurant = {
      title: {en: payload.titleEn},
      slug: {en: payload.slugEn},
      description: {en: payload.descriptionEn},
      longitude: payload.longitude,
      latitude: payload.latitude,
      website: payload.website,
      phone: payload.phone,
      price: payload.price,
      neighborhood: {en: payload.neighborhoodEn},
      likes: payload.likes,
      status: payload.status,
      whatToKnow: {
        'whatToKnow1': {en: payload.whatToKnow1En},
        'whatToKnow2': {en: payload.whatToKnow2En},
        'whatToKnow3': {en: payload.whatToKnow3En}
      },
      whatWeLove: {
        'whatWeLove1': {en: payload.whatWeLove1En},
        'whatWeLove2': {en: payload.whatWeLove2En},
        'whatWeLove3': {en: payload.whatWeLove3En}
      },
      menuItems: {
        'menuItem1': {'title': {en: payload.menuItemTitle1En}, 'description': {en: payload.menuItemDescription1En}},
        'menuItem2': {'title': {en: payload.menuItemTitle2En}, 'description': {en: payload.menuItemDescription2En}},
        'menuItem3': {'title': {en: payload.menuItemTitle3En}, 'description': {en: payload.menuItemDescription3En}},
        'menuItem4': {'title': {en: payload.menuItemTitle4En}, 'description': {en: payload.menuItemDescription4En}}
      }
    }
    let imageArray = []
    let key
    firebase.database().ref(payload.location + '/' + payload.listingType + '/').push(restaurant)
    .then((data) => {
      key = data.key
      return key
    })
    .then(() => {
      const filesToUpload = payload.images
      const filesIdx = _.range(payload.images.length)
      _.each(filesIdx, (idx) => {
        // console.log(filesToUpload[idx])
        const upload = {
          file: filesToUpload[idx],
          name: filesToUpload[idx].name
        }
        // console.log(upload)
        return firebase.storage().ref('listings/images/').child(`/${upload.name}`).put(upload.file)
        .then(fileData => {
          const image = {
            url: fileData.metadata.downloadURLs[0],
            name: fileData.metadata.name
          }
          imageArray.push(image)
          // return imageArray
          console.log(image)
        })
        // return firebase.storage().ref('images/').child(`/${upload.name}`)
        // .put(upload.file)
      })
    })
    .then(() => {
      console.log(imageArray)
      return firebase.database().ref(payload.location + '/' + payload.listingType + '/').child(key).update({images: imageArray})
    })
    .then(() => {
      commit('createRestaurant', {
        ...restaurant,
        id: key
      })
    })
  }
}

// Mutations
const mutations = {
  createRestaurant (state, payload) {
    state.loadedRestaurant.push(payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
