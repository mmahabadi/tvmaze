<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="my-9">
    <div class="title-section">
      <div class="icon"><slot></slot></div>
      <h2 class="title">{{ title }}</h2>
    </div>
  </div>
</template>
<style scoped>
.title-section {
  @apply w-full flex sm:gap-8 gap-4 items-center;

  .icon {
    color: var(--primary-color);
  }
  .title {
    @apply sm:text-xl font-bold text-lg;
  }
}
</style>
