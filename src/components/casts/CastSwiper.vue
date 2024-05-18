<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import SwiperWrapper from '@/@ui/components/SwiperWrapper.vue'
import { type Person } from '@/types'
import { type SwiperOptions } from '@/@ui/types'
import CastItem from './CastItem.vue'
import UsersIcon from '@/@ui/components/icons/UsersIcon.vue'
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
  <div class="mb-12" v-if="slides.length > 0">
    <SectionTitle title="Casts">
      <UsersIcon />
    </SectionTitle>
    <SwiperWrapper v-bind="options">
      <swiper-slide v-for="item in slides" :key="item.id">
        <CastItem :image="item.image?.medium" :name="item.name" />
      </swiper-slide>
    </SwiperWrapper>
  </div>
</template>
