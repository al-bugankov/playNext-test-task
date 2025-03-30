<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-container class="project-header">
  <div class="project-header__title">
  <h1 class="project-header__title-text">#vi-food</h1>
  </div>
    <div class="project-header__theme-switcher">
      <label class="project-header__switch">
        <input id="theme-switcher" type="checkbox" @change="toggleTheme"/>
        <span class="project-header__slider"></span>
      </label>
    </div>
  </v-container>
</template>

<style lang="scss">

.project-header {
  min-width: 100vw;
  flex-direction: column;
  color: rgb(var(--v-theme-accent));
  box-shadow: 0 4px 20px black;
  align-items: center;
  justify-content: center;
}

.project-header__theme-switcher {
  display: flex;
  align-items: center;
}

.project-header__title {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
}

.project-header__switch {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 50px;
  height: 17px;
  background-color: $theme-switcher;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 5px;

  input {
    display: none;
  }

  .project-header__slider {
    width: 15px;
    height: 15px;
    background: url('/src/assets/icons/theme-switcher/moon.svg') no-repeat center/contain;
    border-radius: 50%;
    transition:
      transform 0.4s,
      background-image 0.4s;
    margin: 2px;

    // Стиль для слайдера, когда чекбокс включен
    &.checked {
      transform: translateX(31px);
      background: url('/src/assets/icons/theme-switcher/sun.svg') no-repeat center/contain;
    }
  }

  // Когда input:checked
  input:checked + .project-header__slider {
    transform: translateX(31px);
    background: url('/src/assets/icons/theme-switcher/sun.svg') no-repeat center/contain;
  }
}
</style>
