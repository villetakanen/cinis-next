<script lang="ts" setup>
type View = {
  noun: string
  path: string,
  label?: string
}
const views:Array<View> = [
  { noun: 'd20', path: '/'}
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
    <cn-navigation-icon noun="gamepad" label="me"></cn-navigation-icon>
  </nav>
</template>