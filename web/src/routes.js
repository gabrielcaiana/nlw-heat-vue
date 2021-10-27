import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('@nlw7:token');

  if (!token) {
    next();
  } else {
    store.commit('authentication/setToken', token);
    store.dispatch('authentication/getProfile')
  }

  next();
});

export default router;
