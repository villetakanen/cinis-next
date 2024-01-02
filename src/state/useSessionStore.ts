import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useSessionStore = defineStore('session', () => {
  const uid = ref('')

  function login (id: string) {
    console.log('login', id)
    uid.value = id
  }

  function logout () {
    console.log('logout')
    uid.value = ''
  }

  return { 
    uid: computed(() => uid.value),
    active: computed(() => uid.value !== ''), login, logout }
})
