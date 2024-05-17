<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue'
import { RouterLink } from 'vue-router'
import SearchIcon from './icons/SearchIcon.vue'
import SpinnerIcon from './icons/SpinnerIcon.vue'

const props = defineProps<{
  modelValue: string
  loading: boolean
  results: { id: number; name: string }[]
}>()
const emits = defineEmits(['update:modelValue', 'search'])
const searchQuery = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    searchQuery.value = newValue
  }
)

const updateValue = (value: string) => {
  searchQuery.value = value
  emits('update:modelValue', value)
}
const searchHandler = () => {
  if (searchQuery.value !== '') emits('search')
}
</script>
<template>
  <div class="search">
    <div class="search-container">
      <button @click="searchHandler()" class="search-btn">
        <SearchIcon />
      </button>
      <input
        :value="searchQuery"
        @input="updateValue($event.target.value)"
        type="text"
        placeholder="Search show from here"
        class="search-input"
      />
      <div class="loading" role="status" v-if="loading">
        <SpinnerIcon />
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="dropdown" v-if="!loading && !!searchQuery">
      <ul>
        <li v-if="results?.length === 0" class="dropdown-item no-link">No results found</li>
        <li v-for="item in results" :key="item.id" class="dropdown-item">
          <RouterLink :to="`/details/${item.id}?q=${searchQuery}`" @click.prevent>{{
            item.name
          }}</RouterLink>
        </li>
        <li v-if="results?.length > 0" class="dropdown-item">
          <RouterLink :to="`/search?q=${searchQuery}`" @click.prevent>
            See all the results
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.search-container {
  @apply flex w-full bg-gray-800 rounded-md text-sm gap-4;

  .search-input {
    @apply font-medium text-sm w-11/12 h-12 bg-transparent border-none px-2 text-white;
  }

  .search-btn {
    @apply w-12 flex h-12 rounded text-white justify-center items-center;
    background-color: var(--primary-color);
  }

  .loading {
    @apply absolute right-2 top-2;
  }
}
.search {
  @apply relative inline-block w-full;

  .dropdown {
    @apply hidden absolute z-10 divide-y divide-gray-100 rounded-lg shadow w-full max-w-[650px] bg-gray-700;

    ul {
      @apply py-2 text-sm text-gray-200;

      .dropdown-item {
        @apply block;

        a {
          @apply block px-4 py-2 w-full hover:bg-gray-600 hover:text-white;
        }
        &.no-link {
          @apply block px-4 py-2 w-full;
        }
      }
    }
  }
  &:hover .dropdown,
  &:focus-within .dropdown,
  &:active .dropdown{
    @apply block;
  }
}
</style>
