<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import ThumbnailItem from './ThumbnailItem.vue'
import { type SlideItem } from '@/types'
import { type SwiperOptions } from '@/@ui/types'

const { slidesPerView } = defineProps<{
  loading: boolean
  slidesPerView: number
  slides: SlideItem[]
}>()

const options = {
  slidesPerView: slidesPerView || 4,
  spaceBetween: 50,
  navigation: true,
  loop: false
} as SwiperOptions
</script>
<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <SwiperWrapper v-bind="options">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <ThumbnailItem :item="slide" />
      </swiper-slide>
    </SwiperWrapper>
  </div>
</template>
