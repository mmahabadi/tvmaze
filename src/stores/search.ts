import type { Movie } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as ApiService from '@/services/ApiService'
import { useToasterStore } from './toaster'

export const useSearchStore = defineStore('search', () => {
  const searchResults = ref<Movie[]>([])
  let searchQuery = ''
  const loading = ref(false)
  const error = ref<null | Error>(null)

  const { addToaster } = useToasterStore()

  async function searchShows(query: string): Promise<void> {
    //avoid making the same request multiple times
    if (searchQuery === query) return
    searchQuery = query
    loading.value = true
    try {
      searchResults.value = await ApiService.search(query)
    } catch (e) {
      error.value = e as Error
      addToaster(`Failed to fetch shows`, 'error')
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
