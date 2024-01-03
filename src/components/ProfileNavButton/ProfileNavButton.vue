<script lang="ts" setup>
import { computed } from 'vue';
import { useSessionStore } from '../../state/useSessionStore'

const { active } = useSessionStore()

const link = computed(() => {
  return active.value ? '/profile' : '/login'
})
const noun = computed(() => {
  return active.value ? 'gamepad' : 'token'
})
const label = computed(() => {
  return active.value ? 'me' : 'login'
})

function dummyLogin () {
  console.log('dummy login clicked')
  if (active.value) {
    console.log('dummy logout')
    useSessionStore().logout()
  } else {
    console.log('dummy login')
    useSessionStore().login('aa')
  }
}

</script>

<template>
  <a :href="link" @click.prevent="dummyLogin">
    <cn-navigation-icon :noun="noun" :label="label"></cn-navigation-icon>
  </a>
</template>