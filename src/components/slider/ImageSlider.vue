<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '@/stores/movies'
import SliderItem from './SliderItem.vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'

import 'swiper/css'
import 'swiper/css/autoplay'

const store = useMoviesStore()
const { recentMovies } = storeToRefs(store)

const options = {
  slidesPerView: 3,
  spaceBetween: 0,
  speed: 600,
  lazy: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  }
} as SwiperOptions
</script>
<template>
  <SwiperWrapper v-bind="options" class="w-full -mt-24 h-[44rem]">
    <swiper-slide v-for="item in recentMovies" :key="item.id">
      <SliderItem
        :name="item.name"
        :image="item.image?.original"
        :endDate="item.ended"
        :rating="item.rating?.average"
        :genre="item.genres?.[0]"
      />
    </swiper-slide>
  </SwiperWrapper>
</template>
