<script setup lang="ts">
import LayoutHeader from './components/header/LayoutHeader.vue'
import HeaderLogo from './components/header/HeaderLogo.vue'
import HeaderSearch from './components/header/HeaderSearch.vue'
import HeaderNav from './components/header/HeaderNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Loading from '@/@ui/components/LoadingOverlay.vue'

defineProps<{ loading: boolean }>()
</script>
<template>
  <main class="bg-black text-white">
    <Loading v-if="loading" />
    <div v-else>
      <LayoutHeader>
        <template v-slot:logo>
          <HeaderLogo />
        </template>
        <template v-slot:search>
          <HeaderSearch />
        </template>

        <HeaderNav />
      </LayoutHeader>
      <slot name="slider"></slot>
      <div class="container mx-auto py-6 px-2">
        <slot></slot>
      </div>
      <LayoutFooter />
    </div>
  </main>
</template>
