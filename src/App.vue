<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProjectHeader from '@/components/project-header/components/ProjectHeader.vue'
</script>

<template>
  <header>
    <project-header />
  </header>
    <RouterView />
</template>

<style>
</style>
