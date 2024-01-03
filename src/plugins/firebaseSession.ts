import { App } from "vue";
import { logDebug } from "../utils/logHelpers";
import { firebaseConfig } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export function createFirebaseSession () {
  function install (vueApp: App) {
    logDebug('Installing Firebase Session')

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    vueApp.config.globalProperties.$firebase = app;
    const analytics = getAnalytics(app);
    vueApp.config.globalProperties.$analytics = analytics;
    const auth = getAuth(app);
    vueApp.config.globalProperties.$auth = auth;

    logDebug('Firebase Session Installed')
  }
  return {
    install
  }
}
  