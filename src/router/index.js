import { createRouter, createWebHistory } from 'vue-router';
import Repos from '../components/Repos.vue';
import Repo from '../components/Repo.vue';

const routes = [
  { path: '/', redirect: '/repos' },
  { path: '/repos', component: Repos },
  { path: '/repo/:name', component: Repo },
  { path: '/:catchAll(.*)', redirect: '/repos' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
