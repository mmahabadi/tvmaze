<script setup lang="ts">
import Toaster from './Toaster.vue'
import { useToasterStore } from '@/stores/toaster'

const store = useToasterStore()
</script>
<template>
  <div class="fixed z-40 top-32 right-5">
    <Toaster
      v-for="toaster in store.toasters"
      :key="toaster.id"
      :message="toaster.message"
      :type="toaster.type"
      :id="toaster.id"
    />
  </div>
</template>
