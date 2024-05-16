<script setup lang="ts">
import SearchIcon from '@/@ui/components/icons/SearchIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchQuery = ref('')
const router = useRouter()

const submitForm = () => {
  if (searchQuery.value !== '') {
    router.push({ name: 'search', query: { q: searchQuery.value } })
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" class="search-form">
    <button type="submit" class="search-btn">
      <SearchIcon />
    </button>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search Show Name from here"
      class="search-input"
    />
  </form>
</template>
<style scoped>
.search-form {
  display: flex;
  width: 100%;
  background-color: #1f2937;
  border-radius: 0.25rem;

  .search-input {
    font-size: 0.8rem;
    background-color: transparent;
    border: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    height: 3rem;
    width: calc(100% - 3rem);
  }

  .search-btn {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 3rem;
    border-radius: 0.25rem;
    color: white;
    width: 3rem;
  }
}
</style>
