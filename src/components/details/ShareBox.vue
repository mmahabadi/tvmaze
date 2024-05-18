<script setup lang="ts">
import { defineProps } from 'vue'
import ShareIcon from '@/@ui/components/icons/ShareIcon.vue'
import IconPlay from '@/@ui/components/icons/IconPlay.vue'

defineProps<{
  language: string
}>()
</script>
<template>
  <div class="box">
    <div class="col1">
      <button class="share-btn">
        <ShareIcon />
      </button>
    </div>
    <div class="col2">
      <p>
        Language : <span class="ml-2 truncate">{{ language }}</span>
      </p>
    </div>
    <div class="col3">
      <button class="play-btn">
        <IconPlay />
        Watch
      </button>
    </div>
  </div>
</template>
<style scoped>
.box {
  @apply grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 items-center bg-gray-900 border border-gray-800 rounded-lg;

  .col1 {
    @apply col-span-1 border-r hidden sm:flex;
  }
  .col2 {
    @apply col-span-2 flex-col hidden sm:flex font-medium text-sm;
  }
  .col3 {
    @apply sm:col-span-2 col-span-3 flex justify-end font-medium text-sm;
  }

  .share-btn {
    @apply w-10 h-10 flex justify-center items-center rounded-lg bg-white bg-opacity-20;
  }
  .play-btn {
    @apply py-4 transition border-2 rounded-full flex justify-center items-center gap-4 w-full sm:py-3;
    border-color: var(--primary-color);
  }
  .share-btn:hover,
  .play-btn:hover {
    background-color: var(--primary-color);
  }
}
</style>
