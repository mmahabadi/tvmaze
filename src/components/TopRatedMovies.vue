<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/@ui/components/ThumbnailSwiper.vue'
import IconTopRated from '@/components/icons/IconTopRated.vue'
import { computed } from 'vue'
import { SlideItem } from '@/@ui/types'
import { mapToSlideItems } from '@/utils/mapping'

const store = useMoviesStore()
const { topRatedMovies } = storeToRefs(store)

const slideItems = computed<SlideItem[]>(() => mapToSlideItems(topRatedMovies.value))
</script>
<template>
  <SectionTitle title="Top Rated">
    <IconTopRated />
  </SectionTitle>
  <ThumbnailSwiper :slides="slideItems" />
</template>
