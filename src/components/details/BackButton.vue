<script setup lang="ts">
import { useRouter } from 'vue-router'
import BackIcon from '@/@ui/components/icons/BackIcon.vue'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <button @click="goBack" class="btn-back">
    <div class="text">
      Back
      <BackIcon class="icon" />
    </div>
  </button>
</template>
<style>
.btn-back {
  @apply lg:w-1/4 hidden  w-full xl:flex justify-center items-center hover:bg-transparent border-2 transition duration-300 md:h-64 h-20 rounded font-medium;

  background-color: var(--primary-color);
  border-color: var(--primary-color);

  .text {
    @apply flex justify-center items-center gap-6 text-xl uppercase tracking-widest lg:rotate-90;
  }
  .icon {
    @apply h-9 w-9 md:-rotate-90;
  }
}
</style>
