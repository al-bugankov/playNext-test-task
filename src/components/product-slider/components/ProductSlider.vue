<script setup lang="ts">
import type { IProductType } from '@/modules/shop/stores/shopStore.ts'

defineProps<{ product: IProductType }>()

</script>

<template>
  <v-carousel>
    <v-carousel-item
      v-for="(img, i) in product.images"
      :key="i"
      :src="img"
    />
  </v-carousel>
</template>

<style>

</style>
