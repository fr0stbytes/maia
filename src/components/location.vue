<template>
  <div class="container-fluid has-margin-5">
    <h4>{{$route.params.location}}</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'location',
  created: function () {
    this.$store.dispatch('loadListingTypes', {locationSlug: this.$route.params.location})
  }
}
</script>

<style lang="scss">
</style>
