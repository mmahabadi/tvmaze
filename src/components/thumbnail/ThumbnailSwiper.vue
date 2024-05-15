<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import ThumbnailItem from './ThumbnailItem.vue'
import { SlideItem } from '@/types'
import { SwiperOptions } from '@/@ui/types'

defineProps<{ slides: SlideItem[] }>()

const options = {
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: true,
  loop: true
} as SwiperOptions
</script>
<template>
  <SwiperWrapper v-bind="options">
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <ThumbnailItem :item="slide" />
    </swiper-slide>
  </SwiperWrapper>
</template>
