<script setup lang="ts">
import { useSearchStore } from '@/stores/search'
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import SearchIcon from '@/@ui/components/icons/SearchIcon.vue'
import ShowItem from '@/components/ShowItem.vue'

const store = useSearchStore()
const route = useRoute()
const query = ref('')

watch(
  () => route.query.q,
  (newValue) => {
    query.value = newValue?.toString() || ''
    searchShows()
  }
)

onMounted(() => {
  query.value = route.query.q?.toString() || ''
  searchShows()
})

const searchShows = () => {
  query.value && store.searchShows(query.value)
}
</script>

<template>
  <MainLayout :loading="store.loading">
    <SectionTitle :title="`Search results for '${query}'`">
      <SearchIcon />
    </SectionTitle>
    <div class="container">
      <div class="no-result" v-if="store.searchResults?.length === 0">
        <p>No results found</p>
      </div>
      <div class="item" v-for="item in store.searchResults" :key="item.id">
        <ShowItem v-if="item" :id="item.id" :name="item.name" :image="item.image?.medium" />
      </div>
    </div>
  </MainLayout>
</template>
<style scoped>
.container {
  @apply flex gap-4 flex-wrap justify-center;

  .item {
    @apply w-full md:w-1/2 lg:w-1/3 xl:w-1/4;
  }
  .no-result {
    @apply w-full  h-full flex items-center justify-center;
  }
}
</style>
