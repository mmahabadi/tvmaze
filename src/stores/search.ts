import type { Movie } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as ApiService from '@/services/ApiService'

export const useSearchStore = defineStore('search', () => {
  const searchResults = ref<Movie[]>([])
  let searchQuery = ''
  const loading = ref(false)
  const error = ref<null | Error>(null)

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
    searchResults,
    searchQuery,
    loading,
    error,
    searchShows
  }
})
