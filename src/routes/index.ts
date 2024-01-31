import { lazy } from 'react';

const Tickets = lazy(() => import('../pages/Tickets'));

const coreRoutes = [
  {
    path: '/tickets',
    title: 'tickets',
    component: Tickets,
  },
];

const routes = [...coreRoutes];
export default routes;
