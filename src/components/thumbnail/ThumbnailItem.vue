<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type SlideItem } from '@/types'
import RatingStar from '@/@ui/components/RatingStar.vue'
import IconPlay from '../icons/IconPlay.vue'

defineProps<{ item: SlideItem }>()
</script>
<template>
  <div
    v-if="!!item"
    class="p-4 h-rate border border-border cursor-pointer bg-dry rounded-lg overflow-hidden"
  >
    <RouterLink class="hover:text-subMain transitions text-white" :to="`/details/${item.id}`">
      <img
        :src="item.image"
        alt="About Time of the Dead"
        class="w-full h-full object-cover rounded-lg"
      />
      <div
        class="px-4 gap-6 text-center absolute hover:bg-black hover:bg-opacity-70 top-0 left-0 right-0 bottom-0 display-none flex flex-col justify-center items-center transition duration-300 ease-in-out opacity-0 hover:opacity-100 hover:display-block"
      >
        <button
          class="w-12 h-12 flex justify-center items-center transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white"
        >
          <IconPlay />
        </button>
        <a class="font-semibold text-xl trancuted line-clamp-2" :href="item.name">{{
          item.name
        }}</a>
        <RatingStar :rating="item.rating" />
      </div>
    </RouterLink>
  </div>
</template>
