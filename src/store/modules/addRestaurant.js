import * as firebase from 'firebase'

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
    firebase.database().ref(payload.location + '/' + payload.listingType + '/').push(restaurant)
    .then((data) => {
      const key = data.key
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
