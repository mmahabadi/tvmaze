import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import ApiService from '@/services/ApiService'
import { Movie } from '@/types'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref(null)

  const topRatedMovies = computed(() =>
    movies.value.filter((movie) => movie.rating.average > 8).slice(0, 20)
  )

  const recentMovies = computed(() =>
    movies.value.filter((movie) => new Date(movie.ended).getFullYear() > 2020).slice(0, 20)
  )

  async function fetchMovies() {
    loading.value = true
    try {
      movies.value = await ApiService.getData()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { movies, topRatedMovies, recentMovies, loading, error, fetchMovies }
})
