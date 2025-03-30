<script setup lang="ts">
import OrderForm from '@/components/order-form/components/OrderForm.vue'
import ProductSlider from '@/components/product-slider/components/ProductSlider.vue'
import ProductTabs from '@/components/product-tabs/components/ProductTabs.vue'
import type { IProductType } from '@/modules/shop/types/IShopState.ts'

defineProps<{ product: IProductType }>()

</script>

<template>
  <v-container class="product-card">
    <v-row>
      <v-col cols="12" md="5" class="product-card__slider">
    <product-slider :product="product"/>
      </v-col>
      <v-col cols="12" md="7" class="product-card__details">
        <h1 class="product-card__title">{{ product.title }}</h1>
        <p class="product-card__price">{{ product.price }} ₫</p>
        <product-tabs :product="product" />
        <order-form />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.product-card {
  background-color: rgb(var(--v-theme-secondary));
  border: 1px solid black;
  border-radius: $border-radius;
  margin-block: 16px;
  max-width: 800px;
  color: rgb(var(--v-theme-accent));
}

.product-card__slider {
  display: flex;
  justify-content: space-evenly;
}

</style>
