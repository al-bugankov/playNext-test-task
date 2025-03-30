<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'
import { ERouteNames } from '@/router/ERouteNames.ts'
import { onMounted, onUnmounted, ref } from 'vue'

const router = useRouter()
const shopStore = useShopStore()

const snackbar = ref(true)

const goHome = () => {
  router.push({ name: ERouteNames.SHOP })
}

onMounted(() => {
  if (!shopStore.name || !shopStore.phone) {
    router.push({ name: ERouteNames.SHOP })
  }
})

onUnmounted(()=>{
  shopStore.$reset()
})
</script>

<template>
  <v-container class="delivery content">
        <h1 class="delivery__title">Заказ успешно оформлен!</h1>
        <p class="delivery__text">Имя: {{ shopStore.name }}</p>
        <p class="delivery__text">Телефон: {{ shopStore.phone }}</p>
        <v-btn class="delivery__button" @click="goHome">Вернуться на главную</v-btn>
    <v-snackbar v-model="snackbar" timeout="3000" class="delivery__snackbar">
      Спасибо за заказ!
    </v-snackbar>
  </v-container>
</template>

<style lang="scss">
.delivery {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: rgb(var(--v-theme-accent));
}

.delivery__button {
  border-radius: $border-radius;
  margin-top: 10px;
}

.delivery__title,
.delivery__wrapper,
.delivery__content {
  text-align: center;
}
</style>
