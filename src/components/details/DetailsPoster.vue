<script setup lang="ts">
import DOMPurify from 'dompurify'
import { computed, defineProps } from 'vue'
import type { Movie } from '@/types'
import Image from '@/@ui/components/Image.vue'
import BackButton from './BackButton.vue'
import ShowInfoBox from './ShowInfoBox.vue'
import ShareBox from './ShareBox.vue'

const props = defineProps<{ item: Movie }>()
const { item } = props

const year = computed(() => {
  return item.ended?.split('-')[0]
})

const sanitizedSummary = computed(() => DOMPurify.sanitize(item.summary))
</script>
<template>
  <div class="poster-container">
    <Image :src="item.image?.original" :alt="item.name" class="large-image" />
    <div class="overlay">
      <div
        class="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-col py-10 lg:py-20 gap-8"
      >
        <div class="image-content">
          <Image :src="item.image?.medium" :alt="item.name" class="thumbnail" />
        </div>
        <div class="main-content">
          <div class="inner-container">
            <h1 class="title">{{ item.name }}</h1>
            <ShowInfoBox
              :genres="item.genres.join(',')"
              :status="item.status"
              :days="item.schedule.days?.join(',')"
              :year="year"
              :time="item.schedule.time"
            />
            <p class="summary" v-html="sanitizedSummary"></p>
            <ShareBox :language="item.language" />
          </div>
          <div class="col-span-2 md:mt-0 mt-2 flex justify-center items-center">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.poster-container {
  @apply w-full max-h-[44rem] overflow-hidden relative text-white;

  .large-image {
    @apply w-full hidden xl:inline-block h-full object-cover object-top;
  }
  .overlay {
    @apply xl:bg-black/90 flex-col xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0;

    .image-content {
      @apply xl:col-span-1 w-full xl:order-none order-last border border-gray-800 rounded-lg overflow-hidden;

      .thumbnail {
        @apply w-full h-full object-cover;
      }
    }
  }

  .main-content {
    @apply col-span-2 md:grid grid-cols-5 gap-4 items-center;

    .inner-container {
      @apply col-span-3 flex flex-col gap-10;

      .title {
        @apply xl:text-4xl capitalize font-sans text-2xl font-bold;
      }
    }

    .summary {
      @apply text-sm leading-7;
    }
  }
}
</style>
