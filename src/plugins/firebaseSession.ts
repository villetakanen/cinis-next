import { App } from "vue";
import { logDebug } from "../utils/logHelpers";
import { firebaseConfig } from "../firebase.config";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";

let app:FirebaseApp|undefined = undefined
let auth:Auth|undefined = undefined
let analytics:Analytics|undefined = undefined

export function createFirebaseSession () {
  function install (vueApp: App) {
    logDebug('Installing Firebase Session')

    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    vueApp.config.globalProperties.$auth = auth;

    logDebug('Firebase Session Installed')
  }
  return {
    install
  }
}

export function useFirebaseSession ():{ analytics: Analytics, app: FirebaseApp, auth: Auth } {
  if (!app || !auth || !analytics) {
    throw new Error('Firebase Session not initiated, did you forget to call createFirebaseSession()?')
  }
  return {
    analytics,
    app,
    auth,
  }
}
  