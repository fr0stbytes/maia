<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarMinimize">&#9776;</button>
    <b-link class="navbar-brand" :to="'/'">Dashboard</b-link>
    <b-nav is-nav-bar class="d-md-down-none">
      <b-nav-item class="px-3"><router-link :to="'/'">Dashboard</router-link></b-nav-item>
    </b-nav>
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-item class="d-md-down-none">
        <i class="fa fa-envelope-o"></i><span class="badge badge-pill badge-danger">5</span>
      </b-nav-item>
    </b-nav>
  </header>
</template>
<script>
export default {
  name: 'dashboard-header',
  methods: {
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }
}
</script>
