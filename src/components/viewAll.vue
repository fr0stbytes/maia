<template>
  <div class="container">
    <b-button @click="onAddNew()" variant="success add-btn"><i class="fa fa-plus" aria-hidden="true"></i></b-button>
    <b-button @click="onCategoryPicked()" variant="outline-primary">Categories</i></b-button>
    <p class="card-text">

    </p>
  </div>
</template>

<script>
export default {
  name: 'view-all',
  methods: {
    onAddNew () {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/add-new')
    },
    onCategoryPicked () {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/categories')
    }
  }
}
</script>

<style lang="scss">
</style>
