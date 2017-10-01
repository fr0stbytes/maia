import * as firebase from 'firebase'

// Initial state
const state = {
  loadedCategories: []
}

// getters
const getters = {
  loadedCategories (state) {
    return state.loadedCategories
  }
}

// Actions
const actions = {
  createCategory ({commit}, payload) {
    // const listingTypeSlug = payload.listingTypeSlug
    const category = {
      title: {en: payload.titleEn, gr: payload.titleGr},
      slug: {en: payload.slugEn, gr: payload.slugGr}
    }
    firebase.database().ref(payload.location + '/categories/' + payload.listingType + '_categories').push(category)
    .then((data) => {
      const key = data.key
      commit('createCategory', {
        ...category,
        id: key
      })
    })
  },

  // View Categories from DB
  loadCategories ({commit}, payload) {
    // const listingType = payload.listingType
    firebase.database().ref(payload.location + '/categories/' + payload.listingType + '_categories').once('value')
      .then((data) => {
        const categories = []
        const obj = data.val()
        for (let key in obj) {
          categories.push({
            id: key,
            title: obj[key].title,
            slug: obj[key].slug
          })
        }
        commit('setLoadedCategories', categories)
        // console.log(categories)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  updateCategoryData ({commit}, payload) {
    const updateCat = {
      title: {en: '', gr: ''},
      slug: {en: '', gr: ''}
    }
    // const slug = payload.listingTypeSlug
    if (payload.titleEn) {
      updateCat.title.en = payload.titleEn
    }
    if (payload.slugEn) {
      updateCat.slug.en = payload.slugEn
    }
    if (payload.titleGr) {
      updateCat.title.gr = payload.titleGr
    }
    if (payload.slugGr) {
      updateCat.slug.gr = payload.slugGr
    }
    firebase.database().ref(payload.location + '/categories/' + payload.listingType + '_categories').child(payload.id).update(updateCat)
      .then(() => {
        commit('updateCategory', payload)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deleteCategory ({commit}, payload) {
    // const slug = payload.listingTypeSlug
    firebase.database().ref(payload.location + '/categories/' + payload.listingType + '_categories').child(payload.id).remove()
      .then(() => {
        commit('deleteCategory', payload)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Mutations
const mutations = {
  createCategory (state, payload) {
    state.loadedCategories.push(payload)
  },
  setLoadedCategories (state, payload) {
    state.loadedCategories = payload
  },
  updateCategory (state, payload) {
    const category = state.loadedCategories.find(category => {
      return category.id === payload.id
    })
    if (payload.titleEn) {
      category.title.en = payload.titleEn
    }
    if (payload.slugEn) {
      category.slug.en = payload.slugEn
    }
  },
  deleteCategory (state, payload) {
    const index = state.loadedCategories.findIndex(t => t.id === payload.id)
    state.loadedCategories.splice(index, 1)
    console.log(index)
  },
  ListingTypeId (state, payload) {
    state.ListingTypeId.push(payload)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
