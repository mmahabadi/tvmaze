<script setup lang="ts">
import { onMounted } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import MainLayout from '@/layouts/MainLayout.vue'
import ImageSlider from '@/components/slider/ImageSlider.vue'
import ListByGenre from '@/components/ListByGenre.vue'

const store = useMoviesStore()

//TODO: add error handling
onMounted(() => {
  document.addEventListener('scroll', handleScroll)

  if (store.genres.length === 0) {
    store.fetchMovies()
  }
})

/**
 * Load more movies when user scrolls to the bottom
 */
const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement || document.body
  // Check if user has scrolled to the bottom
  if (scrollTop + clientHeight >= scrollHeight) {
    store.nextPage()
  }
}
</script>

<template>
  <MainLayout :loading="store.loading">
    <template v-slot:slider>
      <ImageSlider />
    </template>
    <div v-for="genre in store.genres" :key="genre">
      <ListByGenre :genre="genre" />
    </div>
  </MainLayout>
</template>
