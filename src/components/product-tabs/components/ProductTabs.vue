<script setup lang="ts">
import { ref } from 'vue';
import type { IProductType } from '@/modules/shop/types/IShopState.ts'

defineProps<{ product: IProductType }>();

const activeTab = ref(0);
</script>

<template>
  <v-container class="product">
        <v-tabs v-model="activeTab" vertical class="product__tabs">
          <v-tab class="product__tab">Описание</v-tab>
          <v-tab class="product__tab">Характеристики</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
          <v-window-item>
            <v-card class="product__description">
              <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item>
            <v-card class="product__specs">
              <v-card-text>
                <div v-for="(spec, i) in product.specs" :key="i">
                  <strong>{{ spec.key }}:</strong> {{ spec.value }}
                </div>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
  </v-container>
</template>

<style lang="scss">

.product {
  padding-inline: 0;
}
.v-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v-card {
  transition: background-color 0s !important;
  border-radius: $border-radius !important;
  box-shadow: none !important;
}

.v-tab {
  border-radius: $border-radius !important;
  &:hover,
  &:active {
    border-radius: $border-radius !important;
  }
}

.v-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.v-btn__content {
  font-size: 12px;
}
</style>
