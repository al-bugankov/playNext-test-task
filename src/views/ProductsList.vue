<script setup lang="ts">
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'
import ProductCard from '@/components/product-card/components/ProductCard.vue'

const shopStore = useShopStore()
</script>

<template>
  <div class="content">
    <product-card v-for="product in shopStore.products" :key="product.id" :product="product" />
  </div>
</template>

<style lang="scss">

</style>
