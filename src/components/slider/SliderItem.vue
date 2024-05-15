<script setup lang="ts">
import { computed } from 'vue'
import DateIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import IconPlay from '@/components/icons/IconPlay.vue'

const { name, image, endDate, rating, genre } = defineProps<{
  name: string
  image: string
  endDate: string
  rating: number
  genre: string
}>()

const year = computed(() => new Date(endDate).getFullYear())
</script>
<template>
  <img :src="image" alt="poster" class="w-full h-full object-cover object-top" />
  <div
    class="bg-black/40 absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center"
  >
    <div
      class="details transition-opacity duration-200 ease-in opacity-0 flex flex-col justify-center md:gap-5 gap-4 items-center"
    >
      <h1 class="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-4xl font-bold">
        {{ name }}
      </h1>
      <div class="flex gap-5 items-center">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">{{ genre }}</span>
        </div>
        <div class="flex items-center gap-2">
          <DateIcon class="text-teal-500" /><span class="text-sm font-medium">{{ year }}</span>
        </div>
        <div class="flex items-center gap-2">
          <ClockIcon class="text-teal-500" /><span class="text-sm font-medium">{{ rating }}hr</span>
        </div>
      </div>
      <div class="flex gap-5 items-center">
        <a
          class="watch-button bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          :href="name"
        >
          <IconPlay class="text-white mr-2" />
          <IconPlay class="text-white mr-2 opacity-0 absolute animate-ping" />
          Watch
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.swiper-slide-next .details,
.watch-button:hover .animate-ping {
  opacity: 100;
}
</style>
