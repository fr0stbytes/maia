<template>
  <div class="">
    <a class="nav-link" variant="link" @click="loadViewAll(url)"><i :class="icon"></i> {{name}}</a>
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
    loadViewAll ($url) {
      // const slug = this.$route.slug
      // const location = this.$route.params.location
      this.$router.push('/' + this.$route.params.location + '/' + $url)
    }
  }
}
</script>
