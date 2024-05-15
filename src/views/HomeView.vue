<script setup lang="ts">
import { onMounted } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import MainLayout from '@/layouts/MainLayout.vue'
import ImageSlider from '@/components/slider/ImageSlider.vue'
import TopRatedMovies from '@/components/TopRatedMovies.vue'
import RecentMovies from '@/components/RecentMovies.vue'
import CTA from '@/components/CTA.vue'

const store = useMoviesStore()

//TODO: add error handling
//TODO: add skeleton loading
//TODO: add lazy
//TODO: add proxy

onMounted(() => {
  store.fetchMovies()
})
</script>

<template>
  <MainLayout>
    <template v-slot:slider>
      <ImageSlider />
    </template>
    <TopRatedMovies />
    <CTA />
    <RecentMovies />
  </MainLayout>
</template>
