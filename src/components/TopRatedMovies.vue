<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/components/thumbnail/ThumbnailSwiper.vue'
import IconScreen from '@/components/icons/IconScreen.vue'
import { computed } from 'vue'
import { type SlideItem } from '@/types'
import { mapToSlideItems } from '@/utils/mapping'

const store = useMoviesStore()
const { topRatedMovies } = storeToRefs(store)

const slideItems = computed<SlideItem[]>(() => mapToSlideItems(topRatedMovies.value))
</script>
<template>
  <SectionTitle title="Top Rated">
    <IconScreen />
  </SectionTitle>
  <ThumbnailSwiper :slidesPerView="5" :slides="slideItems" />
</template>
