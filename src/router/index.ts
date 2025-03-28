import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from "@/views/ProductsList.vue"
import OrderDelivery from '@/modules/delivery/components/OrderDelivery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsList,
    },
    {
      path: '/order',
      name: 'delivery',
      component: OrderDelivery,
    },
  ],
})

export default router
