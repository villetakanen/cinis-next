<script setup lang="ts">
import CharacterList from '../components/frontpage/CharacterList.vue';
import IntroSection from '../components/frontpage/IntroSection.vue';
import WithSession from '../components/withSession/WithSession.vue';

</script>

<template>
  <IntroSection />
  <WithSession>
    <CharacterList />
  </WithSession>
</template>