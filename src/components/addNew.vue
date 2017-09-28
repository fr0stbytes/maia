<template>
  <div class="has-margin-3">
    <h4>Add new {{$route.params.listingType}}</h4>
    <add-restaurant></add-restaurant>
  </div>
</template>

<script>
import AddRestaurant from '@/components/add/addRestaurant'

export default {
  name: 'add-new',
  components: {
    AddRestaurant
  }
}
</script>

<style lang="scss">
</style>
