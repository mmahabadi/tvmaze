<script setup lang="ts">
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/components/thumbnail/ThumbnailSwiper.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { type SlideItem } from '@/types'
import { mapToSlideItems } from '@/utils/mapping'
import IconFilm from '@/components/icons/IconFilm.vue'

const store = useMoviesStore()
const { recentMovies } = storeToRefs(store)

const slideItems = computed<SlideItem[]>(() => mapToSlideItems(recentMovies.value))
</script>
<template>
  <SectionTitle title="Recent Shows">
    <IconFilm />
  </SectionTitle>
  <ThumbnailSwiper :slidesPerView="7" :slides="slideItems" />
</template>
