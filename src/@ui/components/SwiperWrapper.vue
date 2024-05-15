<script setup lang="ts">
import { Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { SwiperOptions } from '@/@ui/types'
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
const swiperOptions: SwiperOptions = computed(() => ({
  centeredSlides: false,
  navigation: false,
  scrollbar: { draggable: true },
  ...props
}))
</script>
<template>
  <swiper :style="swiperStyle" v-bind="swiperOptions" :modules="[Autoplay, Pagination, Navigation]">
    <slot></slot>
  </swiper>
</template>
