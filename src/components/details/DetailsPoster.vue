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
  <div data-testid="poster" class="poster-container">
    <Image :src="item.image?.original" :alt="item.name" class="large-image" />
    <div class="overlay">
      <div class="container">
        <div data-testid="thumbnail" class="image-content">
          <Image :src="item.image?.medium" :alt="item.name" class="thumbnail" />
        </div>
        <div class="main-content">
          <div class="inner-container">
            <h1 class="title">
              {{ item.name }}
            </h1>
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
          <div class="back-container">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.poster-container {
  @apply w-full h-full xl:max-h-[44rem] xl:overflow-hidden relative text-white;

  .large-image {
    @apply w-full hidden xl:inline-block h-full object-cover object-top;
  }
  .overlay {
    @apply xl:bg-black/90 flex-col xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0;

    .container {
      @apply px-3 mx-auto 2xl:px-32 flex-col items-center justify-center lg:grid grid-cols-3 py-10 lg:py-20 gap-8;
    }

    .image-content {
      @apply col-span-3 md:col-span-1 mx-auto w-[12rem] md:block lg:w-full border border-gray-800 rounded-lg overflow-hidden;

      .thumbnail {
        @apply xl:w-full xl:h-full xl:object-cover;
      }
    }
  }

  .main-content {
    @apply col-span-2 lg:grid grid-cols-5 gap-4 items-center;

    .inner-container {
      @apply col-span-5 xl:col-span-3 flex flex-col gap-10;

      .title {
        @apply xl:text-4xl capitalize font-sans text-2xl font-bold;
      }
    }

    .summary {
      @apply text-sm leading-7;
    }
    .back-container {
      @apply col-span-2 md:mt-0 mt-2 flex justify-center items-center;
    }
  }
}
</style>
