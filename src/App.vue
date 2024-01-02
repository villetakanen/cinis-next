<script setup lang="ts">
import { storeToRefs } from 'pinia';
import HelloWorld from './components/HelloWorld.vue'
import NavigationRail from './components/navigation/NavigationRail.vue'
import AppLayout from './layout/AppLayout.vue'
import { useSessionStore } from './state/useSessionStore';

const { uid } = storeToRefs(useSessionStore())
</script>

<template>
  <NavigationRail />
  <AppLayout>
    <h1>{{ uid }}</h1>
    <HelloWorld msg="Vite + Vue" />
  </AppLayout>
</template>

