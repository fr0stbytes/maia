<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <template class="has-margin-1">
            <router-link to="/locations" class="nav-link"> <i class="fa fa-map-marker" aria-hidden="true"></i> Locations</router-link>
          </template>
        </li>
        <li class="nav-item">
          <template class="has-margin-1">
            <router-link to="/users" class="nav-link"> <i class="fa fa-users" aria-hidden="true"></i> Users</router-link>
          </template>
        </li>
        <li class="nav-item">
          <template class="has-margin-1">
            <router-link to="/messages" class="nav-link"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Messages</router-link>
          </template>
        </li>
        <div class="has-margin-1 has-border-bottom" style="opacity:.2;">

        </div>
        <li class="nav-item">
          <template class="has-margin-1" v-if="$route.params.location">
            <router-link :to="{path:'images'}" class="nav-link" append> <i class="fa fa-camera" aria-hidden="true"></i> Images</router-link>
          </template>
        </li>
        <li class="nav-item"  v-for="type in types" :key="type.id">
          <template>
            <template v-if="$route.params.location">
              <SidebarNavLink :name="type.title.en" :url="type.listingTypeSlug.en" :icon="type.listingTypeIcon"/>
            </template>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavStaticLink from './SidebarNavStaticLink'

export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  components: {
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavStaticLink
  },
  computed: {
    items () {
      return this.$store.getters.loadedNavItems
    },
    urlSlug () {
      return this.$store.getters.loadedUrlSlug
    },
    types () {
      return this.$store.getters.loadedListingTypes
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}

</script>

<style lang="css">
</style>
