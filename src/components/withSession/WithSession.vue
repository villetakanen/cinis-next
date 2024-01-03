<script lang="ts" setup>
import { useIsCurrentUserLoaded, useCurrentUser } from 'vuefire'

const active = useIsCurrentUserLoaded()
const user = useCurrentUser()
</script>

<template>
  <template v-if="active">
    <template v-if="user">
      <slot />
    </template>
    <template v-else>
      <router-link to="/login" class="button">Login</router-link>
    </template>
  </template>
</template>