<script setup lang="ts">
import { type Person } from '@/types'
import Image from '@/@ui/components/Image.vue'

defineProps<{ item: Person }>()
</script>
<template>
  <div class="cast-item">
    <Image :src="item.image?.medium" :alt="item.name" class="img" />
    <p class="text-center">{{ item.name }}</p>
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
