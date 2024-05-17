<script setup lang="ts">
const year = new Date().getFullYear()
</script>
<template>
  <div class="footer">Copyright © {{ year }} TVMAZE</div>
</template>
<style scoped>
.footer {
  @apply mt-9 flex h-16 justify-center items-center bg-gray-900;
}
</style>
