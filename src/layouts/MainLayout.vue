<script setup lang="ts">
import LayoutHeader from './components/header/LayoutHeader.vue'
import HeaderLogo from './components/header/HeaderLogo.vue'
import HeaderSearch from './components/header/HeaderSearch.vue'
import HeaderNav from './components/header/HeaderNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
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
    <slot name="slider"></slot>
    <div class="container mx-auto py-6 px-2">
      <slot></slot>
    </div>
    <LayoutFooter />
  </main>
</template>
