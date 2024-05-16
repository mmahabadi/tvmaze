<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/stores/movies'
import MainLayout from '@/layouts/MainLayout.vue'
import DetailsPoster from '@/components/details/DetailsPoster.vue'
import CasteSwiper from '@/components/casts/CastSwiper.vue'
import { type Person } from '@/types'

const route = useRoute()
const store = useMoviesStore()
const showId = Number(route.params.id)

onMounted(() => {
  store.getShowDetails(showId)
})

const casts = computed(() => store.details?._embedded?.cast?.map((item) => item.person as Person))
</script>

<template>
  <MainLayout :loading="store.loading">
    <template v-slot:slider>
      <DetailsPoster v-if="store.details" :item="store.details" />
    </template>
    <CasteSwiper v-if="casts" :slides="casts" />
  </MainLayout>
</template>
