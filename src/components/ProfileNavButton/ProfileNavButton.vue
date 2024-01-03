<script lang="ts" setup>
import { useIsCurrentUserLoaded, useCurrentUser } from 'vuefire'
const active = useIsCurrentUserLoaded()
const user = useCurrentUser()

import { computed } from 'vue';
const link = computed(() => {
  return user.value ? '/profile' : '/login'
})
const noun = computed(() => {
  return user.value ? 'gamepad' : 'tokens'
})
const label = computed(() => {
  return user.value ? 'me' : 'login'
})
</script>

<template>
  <router-link :to="link" v-if="active">
    <cn-navigation-icon :noun="noun" :label="label"></cn-navigation-icon>
  </router-link>
</template>