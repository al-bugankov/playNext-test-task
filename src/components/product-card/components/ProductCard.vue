<script setup lang="ts">
import OrderForm from '@/components/order-form/components/OrderForm.vue'
import ProductSlider from '@/components/product-slider/components/ProductSlider.vue'
import ProductTabs from '@/components/product-tabs/components/ProductTabs.vue'
import type { IProductType } from '@/modules/shop/stores/shopStore.ts'

defineProps<{ product: IProductType }>()

</script>

<template>
  <v-container class="product-card">
    <v-row>
      <v-col cols="12" md="6" class="product-card__slider">
        <product-slider :product="product"/>
      </v-col>
      <v-col cols="12" md="6" class="product-card__content">
        <h1 class="product-card__title">{{ product.title }}</h1>
        <p class="product-card__price">{{ product.price }} ₫</p>
        <order-form class="product-card__form" />
      </v-col>
      <v-col cols="12" md="6" class="product-card__tabs">
        <product-tabs :product="product"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>

</style>
