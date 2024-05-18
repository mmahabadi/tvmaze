<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject } from 'vue'
import SuccessIcon from '@/@ui/components/icons/SuccessIcon.vue'
import ErrorIcon from '@/@ui/components/icons/ErrorIcon.vue'
import WarningIcon from '@/@ui/components/icons/WarningIcon.vue'
import CloseIcon from '@/@ui/components/icons/CloseIcon.vue'
import { useToasterStore } from '@/stores/toaster'
import { defineProps } from 'vue'
import type { ToasterMessage, AppSettings } from '@/types'

const props = defineProps<ToasterMessage>()
const appSettings = inject<AppSettings>('appSettings')
const store = useToasterStore()

const timeout = ref<ReturnType<typeof setTimeout>>()

onMounted(() => {
  timeout.value = setTimeout(() => {
    onClose()
  }, appSettings?.toasterTimeout || 5000)
})

onUnmounted(() => {
  clearTimeout(timeout.value)
})

const onClose = () => {
  store.removeToaster(props.id)
}
</script>
<template>
  <div class="toaster" role="alert">
    <div :class="'icon ' + type">
      <SuccessIcon v-if="type === 'success'" />
      <ErrorIcon v-if="type === 'error'" />
      <WarningIcon v-if="type === 'warning'" />
    </div>
    <div class="text">{{ message }}</div>
    <button type="button" @click="onClose" class="close-button" aria-label="Close">
      <CloseIcon />
    </button>
  </div>
</template>
<style scoped>
.toaster {
  @apply flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-gray-800;

  .icon {
    @apply inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg;

    &.success {
      @apply bg-green-800 text-green-200;
    }
    &.warning {
      @apply bg-orange-700 text-orange-200;
    }
    &.error {
      @apply bg-red-800 text-red-200;
    }
  }
  .text {
    @apply ms-3 text-sm font-normal;
  }

  .close-button {
    @apply ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700;
  }
}
</style>
