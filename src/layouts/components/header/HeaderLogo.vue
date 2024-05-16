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
  width: 100%;
  height: 3rem;
  object-fit: contain;
}
</style>
