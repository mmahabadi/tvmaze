import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ToasterMessage } from '@/types'

export const useToasterStore = defineStore('toaster', () => {
  const toasters = ref<ToasterMessage[]>([])
  let idCounter = 0

  const addToaster = (message: string, type: 'warning' | 'error' | 'success') => {
    toasters.value.push({ id: idCounter++, message, type })
  }

  const removeToaster = (id: number) => {
    toasters.value = toasters.value.filter((toaster) => toaster.id !== id)
  }

  return {
    toasters,
    addToaster,
    removeToaster
  }
})
