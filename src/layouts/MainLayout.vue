<script setup lang="ts">
import LayoutHeader from './components/header/LayoutHeader.vue'
import HeaderLogo from './components/header/HeaderLogo.vue'
import HeaderSearch from './components/header/HeaderSearch.vue'
import HeaderNav from './components/header/HeaderNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Loading from '@/@ui/components/LoadingOverlay.vue'
import ToasterProvider from '@/@ui/components/ToasterProvider.vue'

defineProps<{ loading: boolean }>()
</script>
<template>
  <main class="main">
    <ToasterProvider />
    <Loading v-if="loading" />
    <div class="scr" v-else>
      <LayoutHeader>
        <template #logo>
          <HeaderLogo />
        </template>
        <template v-slot:search>
          <HeaderSearch />
        </template>

        <HeaderNav />
      </LayoutHeader>
      <slot name="slider"></slot>
      <div class="container">
        <slot></slot>
      </div>
      <LayoutFooter />
    </div>
  </main>
</template>
<style scoped>
.main {
  @apply text-white h-full;
}
.scr {
  @apply flex flex-col min-h-screen;
}
.container {
  @apply mx-auto py-6 px-2 flex-1;
}
</style>
