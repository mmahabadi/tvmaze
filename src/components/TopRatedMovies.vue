<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/@ui/components/ThumbnailSwiper.vue'
import IconTopRated from '@/components/icons/IconTopRated.vue'

const store = useMoviesStore()
const { topRatedMovies, loading, error } = storeToRefs(store)
</script>
<template>
  <SectionTitle title="Top Rated">
    <IconTopRated />
  </SectionTitle>
  <ThumbnailSwiper :slides="topRatedMovies" />
</template>
