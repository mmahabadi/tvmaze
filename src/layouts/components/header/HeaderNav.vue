<template>
  <a class="nav-item" href="">Shows</a>
  <a class="nav-item" href="">About Us</a>
  <a class="nav-item" href="">Contact Us</a>
</template>
<style scoped>
.nav-item {
  @apply transition text-white;

  &:hover {
    color: var(--primary-color);
  }
}
.badge {
  @apply w-5 h-5 flex rounded-full text-xs text-white absolute -top-5 -right-1;

  background-color: var(--primary-color);
}
</style>
