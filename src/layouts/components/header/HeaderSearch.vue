<script setup lang="ts">
import SearchInput from '@/@ui/components/SearchInput.vue'
import { useDebounceRef } from '@/@ui/hooks'
import { useSearchStore } from '@/stores/search'
import { computed, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useSearchStore()
const searchQuery = useDebounceRef<string>('', 500)
const router = useRouter()
const route = useRoute()

const results = computed(() =>
  store.searchResults?.slice(0, 5).map((show) => ({ name: show?.name, id: show?.id }))
)

watchEffect(() => {
  searchQuery.value = route.query.q?.toString() || ''
})


watch(searchQuery, (newValue) => {
  !!searchQuery && store.searchShows(newValue)
})

const searchHandler = () => {
  if (searchQuery.value !== '') {
    router.push({ name: 'search', query: { q: searchQuery.value } })
  }
}

</script>
<template>
  <form @submit.prevent="searchHandler">
    <SearchInput
      v-model="searchQuery"
      :loading="store.loading"
      :results="results"
      @search="searchHandler"
    />
  </form>
</template>
