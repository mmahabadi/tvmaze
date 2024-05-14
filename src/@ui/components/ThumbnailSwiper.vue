<script setup lang="ts">
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { ref } from 'vue'
import ThumbnailItem from './ThumbnailItem.vue'
import { SlideItem } from '../types'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

defineProps<{ slides: SlideItem[] }>()

const modules = ref([Autoplay, Pagination, Navigation])
</script>
<template>
  <swiper
    :centeredSlides="true"
    :slides-per-view="5"
    :space-between="50"
    :navigation="true"
    :loop="true"
    :modules="modules"
    :scrollbar="{ draggable: true }"
  >
    <!-- :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }" -->
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <div>
        <ThumbnailItem :item="slide" />
      </div>
    </swiper-slide>
  </swiper>
</template>
