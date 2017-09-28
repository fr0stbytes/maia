<template>
  <div class="app">
    <dashboard-header></dashboard-header>
    <div class="app-body">
      <sidebar-body></sidebar-body>
      <main class="main">
        <div class="container-fluid has-margin-3">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import DashboardHeader from '@/components/navigation/dashboardHeader'
import SidebarBody from '@/components/navigation/sidebar/sidebarBody'
export default {
  name: 'container',
  components: {
    DashboardHeader,
    SidebarBody
  }
}
</script>

<style lang="scss">
</style>
