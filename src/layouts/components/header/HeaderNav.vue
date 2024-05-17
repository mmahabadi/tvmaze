<template>
  <a class="nav-item" href="">Shows</a>
  <a class="nav-item" href="">About Us</a>
  <a class="nav-item" href="">Contact Us</a>
</template>
<style scoped>
.nav-item {
  @apply hover:text-teal-500 transition text-white;
}
.badge {
  @apply w-5 h-5 flex rounded-full text-xs bg-teal-500 text-white absolute -top-5 -right-1;
}
</style>
