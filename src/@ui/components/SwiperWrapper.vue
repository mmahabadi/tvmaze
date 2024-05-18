<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { type SwiperOptions } from '@/@ui/types'
import { defineProps, computed } from 'vue'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const props = defineProps<Partial<SwiperOptions>>()

const swiperStyle = {
  '--swiper-navigation-color': 'rgb(20 184 166 / var(--tw-text-opacity))',
  '--swiper-pagination-color': 'rgb(20 184 166 / var(--tw-text-opacity))'
}
const swiperOptions = computed(() => ({
  ...props
}))

const convertToInt = (prop: number | undefined) => {
  return +(prop ?? 0)
}

const breakpoints = computed(() => ({
  0: {
    slidesPerView: Math.min(1, convertToInt(props.slidesPerView)),
    spaceBetween: Math.min(10, convertToInt(props.spaceBetween))
  },
  768: {
    slidesPerView: Math.min(2, convertToInt(props.slidesPerView)),
    spaceBetween: Math.min(10, convertToInt(props.spaceBetween))
  },
  1024: {
    slidesPerView: Math.min(3, convertToInt(props.slidesPerView)),
    spaceBetween: Math.min(20, convertToInt(props.spaceBetween))
  },
  1280: {
    slidesPerView: Math.min(5, convertToInt(props.slidesPerView)),
    spaceBetween: Math.min(30, convertToInt(props.spaceBetween))
  },
  1536: {
    slidesPerView: convertToInt(props.slidesPerView),
    spaceBetween: convertToInt(props.spaceBetween)
  }
}))
</script>
<template>
  <swiper
    :style="swiperStyle"
    :modules="[Autoplay, Pagination, Navigation]"
    v-bind="swiperOptions"
    :breakpoints="breakpoints"
  >
    <slot></slot>
  </swiper>
</template>
