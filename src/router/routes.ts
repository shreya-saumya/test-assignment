import type { RouteRecordRaw } from 'vue-router';
import dashboardRoutes from 'src/router/dashboardRoutes';

const routes: RouteRecordRaw[] = [
  ...dashboardRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
