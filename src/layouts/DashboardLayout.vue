<template>
  <q-layout view="hHh LpR fFf">
    <!-- Left Panel (Full Height) -->
    <dashboard-left-sidebar v-if="$q.screen.gt.sm" />

    <!-- Right Panel (Scrollable) -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <dashboard-bottom-navigation v-if="$q.screen.lt.md" />
  </q-layout>
</template>

<script setup lang="ts">
import DashboardLeftSidebar from 'src/components/dashboard/DashboardLeftSidebar.vue';
import DashboardBottomNavigation from 'src/components/dashboard/DashboardBottomNavigation.vue';
</script>

<style lang="scss">
/* should be handle for other routes in mobile*/
@media (max-width: 1023px) {
  main {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    padding-top: 9rem;
  }
}
</style>
