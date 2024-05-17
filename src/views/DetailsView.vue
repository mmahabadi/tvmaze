<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import MainLayout from '@/layouts/MainLayout.vue'
import DetailsPoster from '@/components/details/DetailsPoster.vue'
import CasteSwiper from '@/components/casts/CastSwiper.vue'
import { type Person } from '@/types'

const route = useRoute()
const store = useMoviesStore()
const showId = computed(() => +route.params.id)

watch(
  () => route.params.id,
  (newValue) => {
    getShow(+newValue)
  }
)

onMounted(() => {
  getShow(showId.value)
})

const getShow = (id: number) => {
  store.getShowDetails(id)
}

const casts = computed(() => store.details?._embedded?.cast?.map((item) => item.person as Person))
</script>

<template>
  <MainLayout :loading="store.loading">
    <template v-slot:slider>
      <DetailsPoster v-if="store.details" :item="store.details" />
    </template>
    <CasteSwiper v-if="!!casts?.length" :slides="casts" />
  </MainLayout>
</template>
