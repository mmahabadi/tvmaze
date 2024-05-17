<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <RouterLink to="/">
    <img src="@/assets/logo.png" alt="logo" class="logo" />
  </RouterLink>
</template>
<style>
.logo {
  @apply w-full h-12 object-contain;
}
</style>
