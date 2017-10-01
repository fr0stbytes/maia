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
    console.log(payload)
    const restaurant = {
      title: {en: payload.restaurantData.titleEn, gr: payload.restaurantData.titleGr},
      slug: {en: payload.restaurantData.slugEn, gr: payload.restaurantData.slugGr},
      description: {en: payload.restaurantData.descriptionEn, gr: payload.restaurantData.descriptionGr},
      coordinates: {
        longitude: payload.restaurantData.longitude,
        latitude: payload.restaurantData.latitude
      },
      website: payload.restaurantData.website,
      phone: payload.restaurantData.phone,
      price: payload.restaurantData.price,
      neighborhood: {en: payload.restaurantData.neighborhoodEn, gr: payload.restaurantData.neighborhoodGr},
      likes: payload.restaurantData.likes,
      status: payload.restaurantData.status,
      whatToKnow: {
        'whatToKnow1': {en: payload.restaurantData.whatToKnow1En, gr: payload.restaurantData.whatToKnow1Gr},
        'whatToKnow2': {en: payload.restaurantData.whatToKnow2En, gr: payload.restaurantData.whatToKnow2Gr},
        'whatToKnow3': {en: payload.restaurantData.whatToKnow3En, gr: payload.restaurantData.whatToKnow3Gr}
      },
      whatWeLove: {
        'whatWeLove1': {en: payload.restaurantData.whatWeLove1En, gr: payload.restaurantData.whatWeLove1En},
        'whatWeLove2': {en: payload.restaurantData.whatWeLove2En, gr: payload.restaurantData.whatWeLove1En},
        'whatWeLove3': {en: payload.restaurantData.whatWeLove3En, gr: payload.restaurantData.whatWeLove1En}
      },
      menuItems: {
        'menuItem1': {
          'title': {en: payload.restaurantData.menuItemTitle1En, gr: payload.restaurantData.menuItemTitle1Gr},
          'description': {en: payload.restaurantData.menuItemDescription1En, gr: payload.restaurantData.menuItemDescription1Gr}
        },
        'menuItem2': {
          'title': {en: payload.restaurantData.menuItemTitle2En, gr: payload.restaurantData.menuItemTitle2Gr},
          'description': {en: payload.restaurantData.menuItemDescription2En, gr: payload.restaurantData.menuItemDescription2Gr}
        },
        'menuItem3': {
          'title': {en: payload.restaurantData.menuItemTitle3En, gr: payload.restaurantData.menuItemTitle3Gr},
          'description': {en: payload.restaurantData.menuItemDescription3En, gr: payload.restaurantData.menuItemDescription3Gr}
        },
        'menuItem4': {
          'title': {en: payload.restaurantData.menuItemTitle4En, gr: payload.restaurantData.menuItemTitle4Gr},
          'description': {en: payload.restaurantData.menuItemDescription4En, gr: payload.restaurantData.menuItemDescription4Gr}
        }
      }
    }
    let key
    firebase.database().ref(payload.location + '/' + payload.listingType + '/').push(restaurant)
    .then((data) => {
      key = data.key
      return key
    })
    .then(() => {
      const categories = payload.restaurantData.selected
      const categoriesIdx = _.range(payload.restaurantData.selected.length)
      _.each(categoriesIdx, (idx) => {
        const name = categories[idx].title.en
        return firebase.database().ref(payload.location + '/' + payload.listingType + '/' + key + '/categories').push(name)
      })
    })
    .then(() => {
      const filesToUpload = payload.images
      const filesIdx = _.range(payload.images.length)
      _.each(filesIdx, (idx) => {
        const upload = {
          file: filesToUpload[idx],
          name: filesToUpload[idx].name
        }
        return firebase.storage().ref('listings/images/').child(`/${upload.name}`).put(upload.file)
        .then(fileData => {
          const image = {
            url: fileData.metadata.downloadURLs[0],
            name: fileData.metadata.name
          }
          return firebase.database().ref(payload.location + '/' + payload.listingType + '/' + key + '/gallery1').push(image)
        })
      })
    })
    .then(() => {
      const filesToUpload = payload.images2
      const filesIdx = _.range(payload.images2.length)
      _.each(filesIdx, (idx) => {
        const upload = {
          file: filesToUpload[idx],
          name: filesToUpload[idx].name
        }
        return firebase.storage().ref('listings/images/').child(`/${upload.name}`).put(upload.file)
        .then(fileData => {
          const image = {
            url: fileData.metadata.downloadURLs[0],
            name: fileData.metadata.name
          }
          return firebase.database().ref(payload.location + '/' + payload.listingType + '/' + key + '/gallery2').push(image)
        })
      })
    })
    .then(() => {
      // const filename = payload.image.name
      // const ext = filename.slice(filename.lastIndexOf('.'))
      return firebase.storage().ref('listings/images/' + payload.image.name + '/').put(payload.image)
      .then(fileData => {
        const image = fileData.metadata.downloadURLs[0]
        return firebase.database().ref(payload.location + '/' + payload.listingType + '/' + key + '/featured-image').push(image)
      })
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
