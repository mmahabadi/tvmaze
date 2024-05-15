<script setup lang="ts">
import { computed, defineProps } from 'vue'
import StarIconOutline from './icons/StarIconOutline.vue'
import StarIcon from './icons/StarIcon.vue'

const props = defineProps<{ rating: number }>()
const filledStars = computed(() => Math.floor(props.rating / 2))
</script>
<template>
  <div class="flex gap-2 text-yellow-500">
    <!-- Render filled stars -->
    <span v-for="index in filledStars" :key="`filled-star-${index}`">
      <StarIcon />
    </span>

    <!-- Render empty stars -->
    <span v-for="index in 5 - filledStars" :key="`empty-star-${index}`">
      <StarIconOutline />
    </span>
  </div>
</template>
