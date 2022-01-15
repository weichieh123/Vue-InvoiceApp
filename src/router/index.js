import { createRouter, createWebHistory } from 'vue-router'
import InvoiceList from '../views/InvoiceList'

const routes = [
  {
    path: '/',
    name: 'InvoiceList',
    component: InvoiceList,
    props: true,
  },
  {
    path: '/add',
    name: 'AddInvoice',
    props: true,
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('../views/AddInvoice.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
