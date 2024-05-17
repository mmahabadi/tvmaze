<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import SearchInput from '@/@ui/components/SearchInput.vue'

const store = useSearchStore()
const searchQuery = ref('')
const router = useRouter()
const route = useRoute()
const timeout = ref<number | null>(null)

const results = computed(() =>
  store.searchResults?.slice(0, 5).map((show) => ({ name: show?.name, id: show?.id }))
)

onMounted(() => {
  searchQuery.value = route.query.q?.toString() || ''
})

watch(
  () => route.query.q,
  (newValue) => {
    searchQuery.value = newValue?.toString() || ''
  }
)

/**
 * using debounce to avoid making request on every key press
 */
watch(searchQuery, (newValue) => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
  timeout.value = setTimeout(() => {
    store.searchShows(newValue)
  }, 500)
})

const searchHandler = () => {
  if (searchQuery.value !== '') {
    router.push({ name: 'search', query: { q: searchQuery.value } })
  }
}
</script>
<template>
  <SearchInput
    v-model="searchQuery"
    :loading="store.loading"
    :results="results"
    @search="searchHandler"
  />
</template>
<style scoped></style>
