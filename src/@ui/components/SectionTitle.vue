<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="my-9">
    <div class="w-full flex sm:gap-8 gap-4 items-center">
      <div class="text-teal-500"><slot></slot></div>
      <h2 class="sm:text-xl font-bold text-lg">{{ title }}</h2>
    </div>
  </div>
</template>
