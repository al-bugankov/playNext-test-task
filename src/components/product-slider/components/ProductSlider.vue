<script setup lang="ts">
import type { IProductType } from '@/modules/shop/types/IShopState.ts'
import { ref, onMounted, nextTick, watch } from 'vue'
import { useTheme } from 'vuetify'

defineProps<{ product: IProductType }>()

const carousel = ref<{ $el: HTMLElement } | null>(null)
let activeButton: HTMLElement | null = null
const theme = useTheme()

// Функция для установки активной кнопки
const setActiveButton = (button: HTMLElement) => {
  // Снимаем классы с предыдущей активной кнопки
  if (activeButton) {
    activeButton.classList.remove('active', 'hover')
  }

  // Восстановление активной кнопки после перерендера
  const restoreActiveButton = () => {
    if (!activeButton || !carousel.value?.$el) return

    nextTick(() => {
      // Находим кнопку с тем же индексом
      const buttons = carousel.value?.$el.querySelectorAll('.v-carousel__controls__item')
      if (!buttons) return
      const index = Array.from(buttons).findIndex(btn => btn === activeButton)

      if (index >= 0) {
        setActiveButton(buttons[index] as HTMLElement)
      } else if (buttons.length > 0) {
        // Если не нашли, устанавливаем первую кнопку
        setActiveButton(buttons[0] as HTMLElement)
      }
    })
  }


  // Устанавливаем классы новой кнопке
  button.classList.add('active', 'hover')
  activeButton = button

  // Следим за изменением темы
  watch(() => theme.global.name.value, () => {
    restoreActiveButton()
  })
}

// Установка первого элемента активным при загрузке
onMounted(() => {
  nextTick(() => {
    const firstButton = carousel.value?.$el?.querySelector('.v-carousel__controls__item:first-child')
    if (firstButton) {
      setActiveButton(firstButton as HTMLElement)
    }
  })
})

const hideControls = (target: EventTarget | null) => {
  const targetButton = target as HTMLElement
  if (!targetButton.classList.contains('mdi-circle') &&
    !targetButton.classList.contains('v-btn')) {
    return
  }

  const controlsButton = targetButton.closest('.v-carousel__controls__item') as HTMLElement
  if (!controlsButton) return

  const controlsBlock = carousel.value?.$el?.querySelector('.v-carousel__controls') as HTMLElement
  if (!controlsBlock) return

  setActiveButton(controlsButton)

  // Анимация
  controlsBlock.style.transition = 'none'
  controlsBlock.style.opacity = '0'
  setTimeout(() => {
    controlsBlock.style.transition = 'opacity 1s ease-out'
    controlsBlock.style.opacity = '1'
  }, 10)
}


</script>

<template>
  <v-carousel
    :show-arrows="false"
    :height="'auto'"
    ref="carousel"
    @click="hideControls($event.target)"
  >
    <v-carousel-item v-for="(img, i) in product.images" :key="i">
      <v-img :src="img" contain />
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss">
.v-carousel__controls {
  display: flex !important;
  justify-content: space-evenly !important;
  align-items: center !important;
  border-radius: $border-radius !important;
  position: static !important;
  margin-top: 10px;
}

.v-carousel__controls__item {
  background-color: rgb(var(--v-theme-primary)) !important;
  &.hover,
  &.active {
    background-color: rgb(var(--v-theme-accent)) !important;
  }
}

.v-img__img {
  border-radius: $border-radius !important;
  position: static !important;
}

.v-carousel {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}
.v-window__container {
  height: auto !important;
}

.v-btn,
.v-carousel__controls__item {
  transition: background-color 0s !important;
}
</style>
