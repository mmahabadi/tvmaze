import { defineStore } from 'pinia'
import { computed, inject, ref, type ComputedRef } from 'vue'
import * as ApiService from '@/services/ApiService'
import { type AppSettings, type Movie, type ShowByGenre } from '@/types'
import { useToasterStore } from './toaster'

export const useMoviesStore = defineStore('movies', () => {
  const shows = ref<Map<string, ShowByGenre>>(new Map())
  const movies = ref<Movie[]>([])
  const loading = ref(false)
  const error = ref<null | Error>(null)
  const currentIndex = ref(1)
  const appSettings = inject<AppSettings>('appSettings')
  const ITEMS_PER_PAGE = appSettings?.itemsInEachPage || 3
  const ITEMS_LIMIT_FOR_RECENT_MOVIES = appSettings?.itemsToShowInHomePageSlider || 15
  const DATE_LIMIT_FOR_RECENT_MOVIES =
    appSettings?.yearLimitToConsiderAsRecentToShowInHomePageSlider || 2020

  const { addToaster } = useToasterStore()

  const recentMovies = computed(() =>
    movies.value
      .filter((movie) => new Date(movie.ended).getFullYear() > DATE_LIMIT_FOR_RECENT_MOVIES)
      .slice(0, ITEMS_LIMIT_FOR_RECENT_MOVIES)
  )

  /**
   * @note because the API does not support fetching genres,
   * I need to extract the genres from the fetched movies
   */
  const genres = computed(() => [...new Set([...movies.value.flatMap((movie) => movie.genres)])])

  const getByGenre = computed(() => (genre: string): ShowByGenre => {
    loadGenre(genre)
    return shows.value.get(genre) as ShowByGenre
  })

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
      addToaster(`Failed to fetch shows`, 'error')
    } finally {
      loading.value = false
    }
  }

  async function fetchShowByGenre(genre: string): Promise<void> {
    const genreShows = shows.value.get(genre)
    if (!genreShows) return

    try {
      /**
       * @note if the APi supports fetching movies by genre,
       * comment the following line
       * and uncomment the line below
       */
      const items = movies.value
        .filter((movie) => movie.genres.includes(genre))
        .sort((a, b) => b.rating.average - a.rating.average)
      /**
       * @note the API does not support fetching movies by genre
       * uncomment the following line to fetch the movies by genre from the API
       */
      // const items = await ApiService.getShowsByGenre(genre)
      if (items) {
        genreShows.movies = items
      }
    } catch (e) {
      addToaster(`Failed to fetch ${genre} shows`, 'error')
      genreShows.error = e as Error
    } finally {
      genreShows.loading = false
    }
    shows.value.set(genre, genreShows as ShowByGenre)
  }

  function loadGenre(genre: string): void {
    if (!shows.value.has(genre)) {
      const genreShows: ShowByGenre = {
        genre,
        movies: [],
        loading: true,
        error: null
      }
      shows.value.set(genre, genreShows)
      fetchShowByGenre(genre)
    }
  }

  function nextPage(): void {
    if (currentIndex.value * ITEMS_PER_PAGE <= genres.value.length) currentIndex.value++
  }

  return {
    movies,
    genres: paginatedGenres,
    recentMovies,
    loading,
    error,
    fetchMovies,
    getByGenre,
    nextPage
  }
})
