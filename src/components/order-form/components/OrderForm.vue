<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useShopStore } from '@/modules/shop/stores/shopStore.ts'
import { ERouteNames } from '@/router/ERouteNames.ts'

const router = useRouter()
const shopStore = useShopStore()

const formRef = ref()
const inputName = ref<string>('')
const inputPhone = ref<string>('')

const nameRegex = /^[A-Za-zА-Яа-я\s]+$/;
const phoneRegex = /^\d+$/;

const nameRules = [
  (v: string) => !!v || 'Обязательное поле',
  (v: string) => nameRegex.test(v) || 'Только буквы'
];

const phoneRules = [
  (v: string) => !!v || 'Обязательное поле',
  (v: string) => phoneRegex.test(v) || 'Только цифры'
];

const sendOrder = () => {
  const name = inputName.value.trim();
  const phone = inputPhone.value.trim();
  if (formRef.value.validate() && name && phone) {
    shopStore.setUserData(name, phone);
    router.push({ name: ERouteNames.DELIVERY })
  }
}

</script>

<template>
  <v-form ref="formRef" v-slot="{ isValid }" lazy-validation>
    <v-text-field v-model="inputName" :rules="nameRules" label="Имя" required />
    <v-text-field v-model="inputPhone" :rules="phoneRules" label="Телефон" required />
    <v-btn :disabled="!isValid" type="button" @click="sendOrder">Заказать сейчас</v-btn>
  </v-form>
</template>

<style>

</style>
