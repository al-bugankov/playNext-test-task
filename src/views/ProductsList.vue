<script setup lang="ts">
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'
import ProductCard from '@/components/product-card/components/ProductCard.vue'

const shopStore = useShopStore()
</script>

<template>
<product-card v-for="product in shopStore.products" :key="product.id" :product="product" />
</template>

<style lang="scss">

</style>
