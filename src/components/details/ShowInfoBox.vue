<script setup lang="ts">
import { defineProps } from 'vue'
import CalendarIcon from '@/@ui/components/icons/CalendarIcon.vue'
import ClockIcon from '@/@ui/components/icons/ClockIcon.vue'
import { Movie } from '@/types'

type propType = Partial<Pick<Movie, 'status' | 'year' | 'days' | 'time'>> & { genres?: string }

defineProps<propType>()
</script>
<template>
  <div class="box">
    <div class="status">{{ status }}</div>
    <div class="item">
      <span class="text">{{ genres }}</span>
    </div>
    <div class="item">
      <CalendarIcon class="text-primary" />
      <span class="text">
        {{ year }}
      </span>
    </div>
    <div class="item">
      <ClockIcon class="text-primary" />
      <span class="text">{{ days }} {{ time }}</span>
    </div>
  </div>
</template>
<style>
.box {
  @apply flex items-center gap-4 font-medium;

  .status {
    @apply text-xs px-2 py-1;
    background-color: var(--primary-color);
  }

  .item {
    @apply flex items-center gap-2;

    .text-primary {
      color: var(--primary-color);
    }
    .text {
      @apply text-xs font-medium;
    }
  }
}
</style>
