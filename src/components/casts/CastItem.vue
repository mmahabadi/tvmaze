<script setup lang="ts">
import { type CastItemProps } from '@/types'
import Image from '@/@ui/components/Image.vue'

defineProps<CastItemProps>()
</script>
<template>
  <div class="cast-item">
    <Image :src="image" :alt="name" class="img" />
    <p class="text-center">{{ name }}</p>
  </div>
</template>
<style scoped>
.cast-item {
  @apply w-full p-3 rounded flex-col bg-gray-900 border border-gray-800;

  .img {
    @apply w-full h-96 object-cover rounded mb-4;
  }
}
</style>
