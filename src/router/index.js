import { createRouter, createWebHistory } from 'vue-router'
import InvoiceList from '../views/InvoiceList'

const routes = [
  {
    path: '/',
    name: 'InvoiceList',
    component: InvoiceList,
  },
  {
    path: '/add',
    name: 'AddInvoice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AddInvoice.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
