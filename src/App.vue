<template>
  <RouterView />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import { type AppSettings } from '@/types'

// provide('appSettings', {
//   itemsInEachGenreSection: import.meta.env.VUE_APP_ITEMS_IN_EACH_GENRE_SECTION || 20,
//   itemsInEachPage: import.meta.env.VUE_APP_ITEMS_IN_EACH_PAGE || 2,
//   itemsToShowInHomePageSlider: import.meta.env.VUE_APP_ITEMS_TO_SHOW_IN_HOME_PAGE_SLIDER || 15,
//   yearLimitToConsiderAsRecentToShowInHomePageSlider:
//     import.meta.env.VUE_APP_YEAR_LIMIT_TO_CONSIDER_AS_RECENT_TO_SHOW_IN_HOME_PAGE_SLIDER || 2020,
//   toasterTimeout: import.meta.env.VUE_APP_TOASTER_TIMEOUT || 5000
// } as AppSettings)
</script>
