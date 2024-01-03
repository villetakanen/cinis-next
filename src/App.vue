<script setup lang="ts">
import NavigationRail from './components/navigation/NavigationRail.vue'
import AppLayout from './layout/AppLayout.vue'
</script>

<template>
  <NavigationRail />
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

