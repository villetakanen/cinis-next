import { createRouter, createWebHistory } from 'vue-router';
import Frontpage from './frontpage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Frontpage },
    { path: '/debug', component: () => import('./debug/debugView.vue')}
  ]
});