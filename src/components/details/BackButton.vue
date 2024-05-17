<script setup lang="ts">
import { useRouter } from 'vue-router'
import DownloadIcon from '@/@ui/components/icons/DownloadIcon.vue'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <button @click="goBack" class="btn-back">
    <div class="text">
      Back
      <DownloadIcon class="rotate-90" />
    </div>
  </button>
</template>
<style>
.btn-back {
  @apply md:w-1/4 w-full flex justify-center items-center hover:bg-transparent border-2 transition duration-300 md:h-64 h-20 rounded font-medium;

  background-color: var(--primary-color);
  border-color: var(--primary-color);

  .text {
    @apply inline-flex gap-6 text-xl uppercase tracking-widest md:rotate-90;
  }
}
</style>
