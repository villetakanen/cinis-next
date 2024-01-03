<script lang="ts" setup>
import { computed } from 'vue'
import { useFirebaseSession } from '../../plugins/firebaseSession'
import { useSessionStore } from '../../state/useSessionStore'

const { auth } = useFirebaseSession()
const { uid } = useSessionStore()

const user = computed(() => auth.currentUser)
</script>

<template>
  <h1>Debug</h1>
  <pre>uid: [{{ uid }}]</pre>
  <pre>auth: [{{ auth }}]</pre>
  <pre>user: [{{ user }}]</pre>
</template>