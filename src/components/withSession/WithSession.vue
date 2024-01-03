<script lang="ts" setup>
import { useFirebaseSession } from '../../plugins/firebaseSession'

const { active, uid } = useFirebaseSession()
</script>

<template>
  {{ active }} : {{ uid }}
  <template v-if="active">
    <template v-if="uid">
      <slot />
    </template>
    <template v-else>
      <router-link to="/login" class="button">Login</router-link>
    </template>
  </template>
</template>