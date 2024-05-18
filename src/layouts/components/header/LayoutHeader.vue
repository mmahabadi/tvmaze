<template>
  <header>
    <div class="container">
      <div class="col-span-1 lg:block hidden"><slot name="logo"></slot></div>

      <div class="col-span-3">
        <slot name="search"></slot>
      </div>
      <div class="header-inner">
        <slot></slot>
      </div>
    </div>
  </header>
</template>
<style>
header {
  @apply shadow-md sticky top-0 z-20 backdrop-blur-sm bg-gray-900/30;

  .container {
    @apply mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center;

    .header-inner {
      @apply col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center;
    }
  }
}
</style>
