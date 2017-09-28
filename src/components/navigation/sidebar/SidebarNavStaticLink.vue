<template>
  <div class="">
    <b-btn class="nav-link" variant="link" @click="loadStatic(url)"><i :class="icon"></i> {{name}}</b-btn>
  </div>

</template>

<script>
export default {
  name: 'sidebar-nav-link',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    loadStatic ($url) {
      // const slug = this.$route.slug
      // const listingTypeSlug = this.$route.params.listing_type_slug
      this.$router.push('/dashboard' + $url)
    }
  }
}
</script>
