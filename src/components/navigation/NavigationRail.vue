<script lang="ts" setup>
import ProfileNavButton from '../ProfileNavButton/ProfileNavButton.vue'

type View = {
  noun: string
  path: string,
  label?: string
}
const views:Array<View> = [
  { noun: 'letl', path: '/'}
]

</script>

<template>
  <nav class="rail">
    <template v-for="view in views">
      <a :href="view.path">
        <cn-navigation-icon :noun="view.noun" :label="view.label || ''"></cn-navigation-icon>
      </a>
    </template>

    <div class="flex-grow"></div>
    <router-link to="/debug">
      <cn-navigation-icon noun="monsters" label="debug"></cn-navigation-icon>
    </router-link>
    <ProfileNavButton />
  </nav>
</template>