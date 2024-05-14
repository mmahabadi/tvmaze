<script setup lang="ts">
import LayoutHeader from './components/header/LayoutHeader.vue'
import HeaderLogo from './components/header/HeaderLogo.vue'
import HeaderSearch from './components/header/HeaderSearch.vue'
import HeaderNav from './components/header/HeaderNav.vue'
</script>
<template>
  <main class="bg-main text-white">
    <LayoutHeader>
      <template v-slot:logo>
        <HeaderLogo />
      </template>
      <template v-slot:search>
        <HeaderSearch />
      </template>

      <HeaderNav />
    </LayoutHeader>
    <div class="container mx-auto py-6 px-2">
      <slot></slot>
    </div>
  </main>
</template>
