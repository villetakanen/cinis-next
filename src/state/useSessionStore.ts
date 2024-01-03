import { computed, ref } from "vue"
import { useFirebaseSession } from "../plugins/firebaseSession"



const uid = ref('')
let _init = false
function init() {
  if (_init) return
  _init = true
  const { auth } = useFirebaseSession()
  auth.onAuthStateChanged((user) => {
    if (user) {
      uid.value = user.uid
    } else {
      uid.value = ''
    }
  })
}
export function useSessionStore () {
  init()

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
}
