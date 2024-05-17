<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type SlideItem } from '@/types'
import RatingStar from '@/@ui/components/RatingStar.vue'
import IconPlay from '../icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

defineProps<{ item: SlideItem }>()
</script>
<template>
  <div v-if="!!item" class="container">
    <RouterLink :to="`/details/${item.id}`">
      <Image class="t-image" :src="item.image" :alt="item.name" />
      <div class="item">
        <button class="item-button">
          <IconPlay />
        </button>
        <a class="title" :href="item.name">{{ item.name }}</a>
        <RatingStar :rating="item.rating" />
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
.container {
  @apply p-4 border cursor-pointer rounded-lg overflow-hidden;

  RouterLink {
    @apply hover:text-teal-500 transition text-white flex justify-center items-center;
  }
  .t-image {
    @apply w-full h-full min-h-44 object-cover rounded-lg;
  }
  .item {
    @apply px-4 gap-6 text-center absolute hover:bg-black hover:bg-opacity-70 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center transition duration-300 ease-in-out opacity-0 hover:opacity-100;

    .item-button {
      @apply w-12 h-12 flex justify-center items-center transition hover:bg-teal-500 rounded-full bg-white bg-opacity-30 text-white;
    }
    .title {
      @apply font-semibold w-full text-xl truncate overflow-hidden line-clamp-2;
    }
  }
}
</style>
