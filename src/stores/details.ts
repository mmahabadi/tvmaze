import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as ApiService from '@/services/ApiService'
import type { Movie } from '@/types'

export const useDetailsStore = defineStore('details', () => {
  const details = ref<Movie | null>(null)
  const loading = ref(false)
  const error = ref<null | Error>(null)

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

  return {
    details,
    loading,
    error,
    getShowDetails
  }
})
