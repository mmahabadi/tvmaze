<template>
  <div class="overlay">
    <div class="content">
      <div class="loading animate-spin"></div>
    </div>
  </div>
</template>
<style scoped>
.overlay {
  @apply w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black;

  .content {
    @apply flex items-center justify-center w-full h-full;
  }
  .loading {
    @apply rounded-md h-12 w-12 border-4 border-t-4 absolute z-50;
    border-color: var(--primary-color);
  }
}
</style>
