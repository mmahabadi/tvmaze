import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import type { AppSettings } from './types'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('appSettings', {
  itemsInEachGenreSection: import.meta.env.VUE_APP_ITEMS_IN_EACH_GENRE_SECTION || 20,
  itemsInEachPage: import.meta.env.VUE_APP_ITEMS_IN_EACH_PAGE || 2,
  itemsToShowInHomePageSlider: import.meta.env.VUE_APP_ITEMS_TO_SHOW_IN_HOME_PAGE_SLIDER || 15,
  yearLimitToConsiderAsRecentToShowInHomePageSlider:
    import.meta.env.VUE_APP_YEAR_LIMIT_TO_CONSIDER_AS_RECENT_TO_SHOW_IN_HOME_PAGE_SLIDER || 2020,
  toasterTimeout: import.meta.env.VUE_APP_TOASTER_TIMEOUT || 5000
} as AppSettings)
app.mount('#app')
