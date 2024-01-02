<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import NavigationRail from './components/navigation/NavigationRail.vue'
import AppLayout from './layout/AppLayout.vue'
</script>

<template>
  <NavigationRail />
  <AppLayout>
    <HelloWorld msg="Vite + Vue" />
  </AppLayout>
</template>

