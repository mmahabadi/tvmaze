<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import { type Person } from '@/types'
import { type SwiperOptions } from '@/@ui/types'
import CastItem from './CastItem.vue'
import UserIcon from '@/@ui/components/icons/UserIcon.vue'
import SectionTitle from '@/@ui/components/SectionTitle.vue'

defineProps<{ slides: Person[] }>()

const options = {
  slidesPerView: 4,
  spaceBetween: 50,
  navigation: true,
  autoplay: {
    delay: 5000
  }
} as SwiperOptions
</script>
<template>
  <div class="mb-12">
    <SectionTitle title="Casts">
      <UserIcon />
    </SectionTitle>
    <SwiperWrapper v-bind="options">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <CastItem :item="slide" />
      </swiper-slide>
    </SwiperWrapper>
  </div>
</template>
