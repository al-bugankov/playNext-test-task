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

// Состояние снекбара
const snackbar = ref({
  visible: false,
  message: '',
  timeout: 3000,
});


const sendOrder = () => {
  const name = inputName.value.trim();
  const phone = inputPhone.value.trim();
  if (formRef.value.validate() && name && phone) {
    shopStore.setUserData(name, phone);
    router.push({ name: ERouteNames.DELIVERY })
  } else {
        snackbar.value.message = 'Заполните данные формы перед заказом!';
        snackbar.value.visible = true;
      }
}

</script>

<template>
  <v-form class='delivery__form' ref="formRef" v-slot="{ isValid }" lazy-validation>
    <v-text-field v-model="inputName" :rules="nameRules" label="Имя" required />
    <v-text-field v-model="inputPhone" :rules="phoneRules" label="Телефон" required />
    <v-btn :disabled="!isValid" type="button" @click="sendOrder">Заказать сейчас</v-btn>
  </v-form>
  <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" top right class="delivery__snackbar">
    {{ snackbar.message }}
  </v-snackbar>
</template>

<style lang="scss">
.delivery__form {
  margin-top: 10px;
}

.delivery__form .v-btn {
  border-radius: $border-radius !important;
}

.delivery__snackbar {
  margin-bottom: 100px;
}

.v-field__field {
  height: 45px;
}

.v-field {
  border-radius: $border-radius !important;
}

.v-field__input {
    padding-top: 0 !important;
}

.v-field-label--floating {
  top: 0 !important;
}

.v-messages__message {
  margin-bottom: 5px;
}

.v-btn {
  margin-top: 2px;
}

.v-field__outline,
.v-field__outline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 2% !important;
  width: 95% !important;
  height: 100%;
}

.delivery__form {
  display: flex;
  flex-direction: column;
}
</style>
