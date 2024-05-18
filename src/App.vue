<template>
  <RouterView />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import { type AppSettings } from '@/types'

provide('appSettings', {
  itemsInEachGenreSection: 20,
  itemsInEachPage: 2,
  itemsToShowInHomePageSlider: 15,
  yearLimitToConsiderAsRecentToShowInHomePageSlider: 2020,
  toasterTimeout: 5000,
} as AppSettings)
</script>
