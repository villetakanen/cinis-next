<script lang="ts" setup>
import { computed } from 'vue'
import { getAuth } from "firebase/auth"
import { getApp } from "firebase/app"

const auth = getAuth()
const app = getApp()

const user = computed(() => auth.currentUser)
</script>

<template>
  <h1>Debug</h1>
  <pre>[{{ app }}]</pre>
  <pre>[{{ user }}]</pre>
</template>