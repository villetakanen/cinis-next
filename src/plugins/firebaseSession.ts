import { ComputedRef, computed, ref } from "vue";
import { logDebug } from "../utils/logHelpers";
import { firebaseConfig } from "../firebase.config";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

let app:FirebaseApp|undefined = undefined
let auth:Auth|undefined = undefined
let analytics:Analytics|undefined = undefined
let db:Firestore|undefined = undefined
const uid = ref('')
const active = ref(false)

export function createFirebaseSession () {
  function install () {
    logDebug('Installing Firebase Session')

    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    db = getFirestore(app);

    auth.onAuthStateChanged((user) => {
      if (user) {
        uid.value = user.uid
        logDebug('Firebase Session User Logged In')
      } else {
        uid.value = ''
        logDebug('Firebase Session User Logged Out')
      }
      active.value = true
      logDebug('Firebase Session Active, uid:', uid)
    });

    logDebug('Firebase Session Installed')

  }
  return {
    install
  }
}

export function useFirebaseSession ():{
  analytics: Analytics, 
  app: FirebaseApp,
  auth: Auth,
  db: Firestore 
  active: ComputedRef<boolean>,
  uid: ComputedRef<string>
} {
  if (!app || !auth || !analytics || !db) {
    throw new Error('Firebase Session not initiated, did you forget to call createFirebaseSession()?')
  }
  return {
    analytics,
    app,
    auth,
    db,
    active: computed(() => active.value),
    uid: computed(() => uid.value)
  }
}
  