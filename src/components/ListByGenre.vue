<script setup lang="ts">
import { computed, onMounted, defineProps, ref } from 'vue'
import { useMoviesStore } from '@/stores/movies'
import SectionTitle from '@/@ui/components/SectionTitle.vue'
import ThumbnailSwiper from '@/components/thumbnail/ThumbnailSwiper.vue'
import IconScreen from '@/components/icons/IconScreen.vue'
import { type Movie, type SlideItem } from '@/types'
import { mapToSlideItems } from '@/utils/mapping'

const { genre } = defineProps<{
  genre: string
}>()

const store = useMoviesStore()
const shows = ref<Movie[]>([])

onMounted(() => {
  shows.value = store.getByGenre(genre)
})

const slideItems = computed<SlideItem[]>(() => mapToSlideItems(shows.value))
</script>
<template>
  <SectionTitle :title="genre">
    <IconScreen />
  </SectionTitle>
  <ThumbnailSwiper :loop="false" :slidesPerView="7" :slides="slideItems" />
</template>
