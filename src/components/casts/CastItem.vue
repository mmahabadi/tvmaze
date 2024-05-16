<script setup lang="ts">
import { type Person } from '@/types'

defineProps<{ item: Person }>()
</script>
<template>
  <div
    class="w-full p-3 italic text-xs text-text rounded flex-col bg-gray-900 border border-gray-800"
  >
    <img
      v-if="item.image?.medium"
      :src="item.image?.medium"
      :alt="item.name"
      class="w-full h-64 object-cover rounded mb-4"
    />
    <img
      v-else
      src="@/assets/image-placeholder.jpg"
      alt="image-placeholder"
      class="w-full h-64 object-cover rounded mb-4"
    />
    <p class="text-center">{{ item.name }}</p>
  </div>
</template>
