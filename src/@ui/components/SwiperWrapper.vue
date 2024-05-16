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
const breakpoints = computed(() => ({
  0: { slidesPerView: 1, spaceBetween: 10 },
  768: { slidesPerView: 2, spaceBetween: 10 },
  1024: { slidesPerView: 3, spaceBetween: 20 },
  1280: { slidesPerView: props.slidesPerView, spaceBetween: props.spaceBetween }
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
