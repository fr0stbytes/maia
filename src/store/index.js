import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'

import locations from './modules/locations'
// import location from './modules/location'
import listingTypes from './modules/listingTypes'
import categories from './modules/categories'
import addRestaurant from './modules/addRestaurant'
import images from './modules/images'
import shared from './modules/shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locations,
    listingTypes,
    categories,
    addRestaurant,
    images,
    shared
  }
})
