import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
    { path: '/games', component: () => import('pages/GamesPage.vue') },
    { path: '/teams', component: () => import('pages/TeamsPage.vue') },
    { path: '/players', component: () => import('pages/PlayersPage.vue') },]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
