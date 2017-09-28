import Vue from 'vue'
import Vuex from 'vuex'
// import * as firebase from 'firebase'

import locations from './modules/locations'
// import location from './modules/location'
import listingTypes from './modules/listingTypes'
import categories from './modules/categories'
import addRestaurant from './modules/addRestaurant'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    locations,
    listingTypes,
    categories,
    addRestaurant
  }
})
