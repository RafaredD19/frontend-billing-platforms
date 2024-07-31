import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import BillingView from '../views/BillingView.vue';
import DashboardView from '../views/DashboardView.vue';
import MasterLayout from '../layouts/MasterLayout.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/billing',
    name: 'billing',
    component: BillingView,
    meta: { layout: MasterLayout }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { layout: MasterLayout }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
