<script setup lang="ts">
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/@ui/components/ThumbnailSwiper.vue'
import { useMoviesStore } from '@/stores/movies'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { SlideItem } from '@/@ui/types'
import { mapToSlideItems } from '@/utils/mapping'

const store = useMoviesStore()
const { recentMovies } = storeToRefs(store)

const slideItems = computed<SlideItem[]>(() => mapToSlideItems(recentMovies.value))
</script>
<template>
  <SectionTitle title="Recent Movies">
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      class="sm:w-6 sm:h-6 w-4 h-4 text-subMain"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
      ></path>
    </svg>
  </SectionTitle>
  <ThumbnailSwiper :slides="slideItems" />
</template>
