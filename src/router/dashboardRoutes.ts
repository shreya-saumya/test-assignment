const dashboardRoutes = [
  {
    path: '/',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/dashboard/DashboardPage.vue'),
      },
      {
        path: 'cards',
        component: () => import('pages/cards/CardsPage.vue'),
      },
      {
        path: 'payments',
        component: () => import('pages/payments/PaymentsPage.vue'),
      },
      {
        path: 'credit',
        component: () => import('pages/credit/CreditPage.vue'),
      },
      {
        path: 'settings',
        component: () => import('pages/settings/SettingsPage.vue'),
      },
    ],
  },
];
export default dashboardRoutes;
