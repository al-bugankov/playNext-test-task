<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'
import { ERouteNames } from '@/router/ERouteNames.ts'
import { onUnmounted, ref } from 'vue'

const router = useRouter()
const shopStore = useShopStore()

const snackbar = ref(true)

const goHome = () => {
  router.push({ name: ERouteNames.SHOP })
}

onUnmounted(()=>{
  shopStore.$reset()
})
</script>

<template>
  <v-container class="delivery" fluid>
    <v-row class="delivery__wrapper">
      <v-col cols="12" md="6" class="delivery__content">
        <h1 class="delivery__title">Заказ успешно оформлен!</h1>
        <p class="delivery__text">Имя: {{ shopStore.name }}</p>
        <p class="delivery__text">Телефон: {{ shopStore.phone }}</p>
        <v-btn class="delivery__button" @click="goHome">Вернуться на главную</v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" timeout="3000" class="delivery__snackbar">
      Спасибо за заказ!
    </v-snackbar>
  </v-container>
</template>

<style>

</style>
