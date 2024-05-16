import { defineStore } from 'pinia'
import { computed, ref, type ComputedRef } from 'vue'
import * as ApiService from '@/services/ApiService'
import { type Movie } from '@/types'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<Movie[]>([])
  const details = ref<Movie | null>(null)
  const loading = ref(false)
  const error = ref<null | Error>(null)
  const currentIndex = ref(1)
  const ITEMS_PER_PAGE = 3
  const searchResults = ref<Movie[]>([])
  let searchQuery = ''

  const topRatedMovies = computed(() =>
    movies.value.filter((movie) => movie.rating.average > 8).slice(0, 20)
  )

  const recentMovies = computed(() =>
    movies.value.filter((movie) => new Date(movie.ended).getFullYear() > 2020).slice(0, 20)
  )

  const genres = computed(() => [...new Set([...movies.value.flatMap((movie) => movie.genres)])])

  const paginatedGenres: ComputedRef<string[]> = computed(() => {
    const startIndex = currentIndex.value
    const endIndex = startIndex * ITEMS_PER_PAGE
    // Concatenate the new slice with the previous values of pagedGenres
    return [...genres.value.slice(0, endIndex)]
  })

  async function fetchMovies(): Promise<void> {
    loading.value = true
    try {
      movies.value = await ApiService.getData()
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  function getByGenre(genre: string): Movie[] {
    return movies.value
      .filter((movie) => movie.genres.includes(genre))
      .sort((a, b) => b.rating.average - a.rating.average)
  }

  function nextPage(): void {
    if (currentIndex.value * ITEMS_PER_PAGE <= genres.value.length) currentIndex.value++
  }

  async function getShowDetails(id: number): Promise<void> {
    loading.value = true
    try {
      details.value = await ApiService.getDetails(id)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  async function searchShows(query: string): Promise<void> {
    //avoid making the same request multiple times
    if (searchQuery === query) return
    searchQuery = query
    loading.value = true
    try {
      searchResults.value = await ApiService.search(query)
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return {
    movies,
    genres: paginatedGenres,
    searchResults,
    topRatedMovies,
    recentMovies,
    details,
    loading,
    error,
    fetchMovies,
    getByGenre,
    nextPage,
    getShowDetails,
    searchShows
  }
})
