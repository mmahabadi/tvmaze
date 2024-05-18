<script setup lang="ts">
import { computed, defineProps, inject } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/components/thumbnail/ThumbnailSwiper.vue'
import IconScreen from '@/components/icons/IconScreen.vue'
import type { AppSettings, SlideItem } from '@/types'
import { mapToSlideItems } from '@/utils/mapping'

const { genre } = defineProps<{
  genre: string
}>()
const appSettings = inject<AppSettings>('appSettings')
const LIMIT = appSettings?.itemsInEachGenreSection || 20
const store = useMoviesStore()
const genreShow = computed(() => store.getByGenre(genre))
const slideItems = computed<SlideItem[]>(() =>
  mapToSlideItems(genreShow.value.movies.slice(0, LIMIT) || [])
)
</script>
<template>
  <SectionTitle :title="genre">
    <IconScreen />
  </SectionTitle>
  <ThumbnailSwiper :loading="!!genreShow?.loading" :slidesPerView="7" :slides="slideItems" />
</template>
