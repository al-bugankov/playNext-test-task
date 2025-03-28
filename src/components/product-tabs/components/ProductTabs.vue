<script setup lang="ts">
import { ref } from 'vue';
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'

import type { IProductType } from '@/modules/shop/types/IShopState.ts'

// Ссылка на текущий продукт
defineProps<{ product: IProductType }>();
const shopStore = useShopStore();

// Активная вкладка (0 - описание, 1 - характеристики, 2 - доставка)
const activeTab = ref(0);

// Состояние снекбара
const snackbar = ref({
  visible: false,
  message: '',
  timeout: 3000,
});

// Функция для обработки оформления доставки
const handleDeliveryOrder = () => {
  if (!shopStore.name || !shopStore.phone) {
    snackbar.value.message = 'Заполните данные формы перед заказом!';
    snackbar.value.visible = true;
  }
};
</script>

<template>
  <v-container class="product">
    <v-row>
      <!-- Tabs -->
      <v-col cols="12" md="6">
        <v-tabs v-model="activeTab" vertical class="product__tabs">
          <v-tab class="delivery__tab">Описание</v-tab>
          <v-tab class="delivery__tab">Характеристики</v-tab>
          <v-tab class="delivery__tab">Заказать доставку</v-tab>

          <!-- Содержимое вкладок -->
          <v-tab-item v-if="activeTab === 0">
            <v-card class="product__description">
              <v-card-text>{{ product.description }}</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item v-if="activeTab === 1">
            <v-card class="product__specs">
              <v-card-text>{{ product.specs }}</v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item v-if="activeTab === 2">
            <v-card class="product__delivery">
              <v-card-text>
                <v-btn @click="handleDeliveryOrder" class="delivery__order-btn">Оформить доставку</v-btn>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" top right class="delivery__snackbar">
      {{ snackbar.message }}
      <v-btn color="pink" text @click="snackbar.visible = false">Закрыть</v-btn>
    </v-snackbar>
  </v-container>
</template>

<style>

</style>
