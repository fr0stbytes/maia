<template>
  <div class="">
    <h4>{{$route.params.listingType}}</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'listing-type'
}
</script>

<style lang="scss">
</style>
