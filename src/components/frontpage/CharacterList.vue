<script lang="ts" setup>
/*import { Ref, onMounted, ref } from 'vue';
import { Character } from '../../models/character'
import { z } from 'zod'
import { getDocs, query, collection } from 'firebase/firestore'

type Char = z.infer<typeof Character>

const chars:Ref<Array<Char>> = ref([])

onMounted(async () => {
  const q = query(collection(db, 'characters'))
  const pcs = await getDocs(q)
  pcs.docs.forEach(doc => {
    const c = doc.data() as Char
    c.key = doc.id
    const index = chars.value.findIndex(c => c.key === doc.id)
    if (index > -1) {
      chars.value.splice(index, 1, c)
    } else {
      chars.value.push(c)
    }
  })
})*/
</script>

<template>
  <!--p v-for="char in chars" :key="char.key">
    {{ char.title }}
  </p-->
</template>