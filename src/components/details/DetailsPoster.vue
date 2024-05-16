<script setup lang="ts">
import DOMPurify from 'dompurify'
import { RouterLink } from 'vue-router'
import { computed, defineProps } from 'vue'
import type { Movie } from '@/types'
import CalendarIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import ShareIcon from '@/@ui/components/icons/ShareIcon.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import DownloadIcon from '@/@ui/components/icons/DownloadIcon.vue'

const props = defineProps<{ item: Movie }>()
const { item } = props

const year = computed(() => {
  return item.ended?.split('-')[0]
})

const sanitizedSummary = computed(() => DOMPurify.sanitize(item.summary))
</script>
<template>
  <div class="w-full xl:h-screen relative text-white">
    <img
      :src="item.image.original"
      :alt="item.name"
      class="w-full hidden xl:inline-block h-full object-cover object-top"
    />
    <div
      class="xl:bg-main xl:bg-black/90 flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0"
    >
      <div
        class="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8"
      >
        <div
          class="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden"
        >
          <img :src="item.image.medium" :alt="item.name" class="w-full h-full object-cover" />
        </div>
        <div class="col-span-2 md:grid grid-cols-5 gap-4 items-center">
          <div class="col-span-3 flex flex-col gap-10">
            <h1 class="xl:text-4xl capitalize font-sans text-2xl font-bold">{{ item.name }}</h1>
            <div class="flex items-center gap-4 font-medium text-dryGray">
              <div class="flex-colo bg-teal-500 text-xs px-2 py-1">{{ item.status }}</div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-medium">{{ item.genres.join(',') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <CalendarIcon class="text-teal-500" />
                <span class="text-sm font-medium">
                  {{ year }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <ClockIcon class="text-teal-500" />
                <span class="text-sm font-medium"
                  >{{ item.schedule.days.join(',') }} {{ item.schedule.time }}</span
                >
              </div>
            </div>
            <p class="text-text text-sm leading-7" v-html="sanitizedSummary"></p>
            <div
              class="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 items-center bg-gray-900 border border-gray-800 rounded-lg"
            >
              <div class="col-span-1 border-r border-border">
                <button
                  class="w-10 h-10 flex justify-center items-center rounded-lg bg-white bg-opacity-20 hover:bg-teal-500"
                >
                  <ShareIcon />
                </button>
              </div>
              <div class="col-span-2 flex-colo font-medium text-sm">
                <p>
                  Language : <span class="ml-2 truncate">{{ item.language }}</span>
                </p>
              </div>
              <div class="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                <button
                  class="bg-dry py-4 hover:bg-teal-500 transitions border-2 border-teal-500 rounded-full flex justify-center items-center gap-4 w-full sm:py-3"
                >
                  <IconPlay />
                  Watch
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-2 md:mt-0 mt-2 flex justify-center items-center">
            <RouterLink
              to="/"
              class="md:w-1/4 w-full flex justify-center items-center bg-teal-500 hover:bg-transparent border-2 border-teal-500 transitions duration-300 md:h-64 h-20 rounded font-medium"
            >
              <div class="inline-flex gap-6 text-md uppercase tracking-widest md:rotate-90">
                HomePage
                <DownloadIcon class="rotate-90" />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
