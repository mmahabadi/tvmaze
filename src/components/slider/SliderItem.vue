<script setup lang="ts">
import { computed } from 'vue'
import DateIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import IconPlay from '@/@ui/components/icons/IconPlay.vue'
import { RouterLink } from 'vue-router'
import Image from '@/@ui/components/Image.vue'

const { endDate } = defineProps<{
  id: number
  name: string
  image: string
  endDate: string
  rating: number
  genre: string
}>()

const year = computed(() => new Date(endDate).getFullYear())
</script>
<template>
  <Image :src="image" alt="poster" class="poster" />
  <div class="bg-overlay">
    <div class="details">
      <h1 class="text-heading">
        {{ name }}
      </h1>
      <div class="info-section">
        <div class="info-part">
          <span class="info-text">{{ genre }}</span>
        </div>
        <div class="info-part">
          <DateIcon class="theme-color" /><span class="info-text">{{ year }}</span>
        </div>
        <div class="info-part">
          <ClockIcon class="theme-color" /><span class="info-text">{{ rating }}hr</span>
        </div>
      </div>
      <div class="info-section">
        <RouterLink class="watch-button" :to="`/details/${id}`">
          <IconPlay class="text-white mr-2" />
          <IconPlay class="text-white mr-2 opacity-0 absolute animate-ping" />
          Watch
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.theme-color {
  color: var(--primary-color);
}
.swiper-slide-next .details,
.watch-button:hover .animate-ping {
  opacity: 100;
}
.poster {
  @apply w-full h-full object-cover object-top;
}
.bg-overlay {
  @apply bg-black/40 absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center;
}
.details {
  @apply transition-opacity duration-200 ease-in opacity-0 flex flex-col justify-center md:gap-5 gap-4 items-center;

  .text-heading {
    @apply xl:text-4xl truncate capitalize font-sans sm:text-2xl text-4xl font-bold;
  }

  .watch-button {
    @apply text-white font-bold py-2 px-4 rounded inline-flex items-center;
    background-color: var(--primary-color);
    &:hover {
      background-color: var(--primary-color-dark);
    }
  }

  .info-section {
    @apply flex gap-5 items-center;

    .info-part {
      @apply flex items-center gap-2;

      .info-text {
        @apply text-sm font-medium;
      }
    }
  }
}
</style>
