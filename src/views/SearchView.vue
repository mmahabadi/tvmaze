<script setup lang="ts">
import { useMoviesStore } from '@/stores/movies'
import { onMounted, watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import SearchIcon from '@/@ui/components/icons/SearchIcon.vue'
import type { SlideItem } from '@/types'
import { mapToSlideItems } from '@/utils/mapping'
import ShowItem from '@/components/ShowItem.vue'

const store = useMoviesStore()
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
      <div class="item" v-for="item in store.searchResults" :key="item.id">
        <ShowItem v-if="item" :id="item.id" :name="item.name" :image="item.image?.medium" />
      </div>
    </div>
  </MainLayout>
</template>
<style scoped>
.container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  .item {
    width: 100%;
    max-width: 16rem;
  }
}
</style>
