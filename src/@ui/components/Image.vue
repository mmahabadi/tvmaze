<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ src?: string; alt?: string }>()
</script>
<template>
  <img v-if="src" :src :alt class="w-full h-full object-cover" />
  <img
    v-else
    class="w-full h-full object-cover"
    src="@/assets/image-placeholder.jpg"
    alt="image-placeholder"
  />
</template>
