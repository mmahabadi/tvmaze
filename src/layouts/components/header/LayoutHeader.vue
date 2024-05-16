<template>
  <header>
    <div class="container">
      <div class="col-span-1 lg:block hidden"><slot name="logo"></slot></div>

      <div class="col-span-3">
        <slot name="search"></slot>
      </div>
      <div
        class="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center"
      >
        <slot></slot>
      </div>
    </div>
  </header>
</template>
<style>
header {
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .container {
    display: grid;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0.5rem;
    margin-left: auto;
    margin-right: auto;
    @apply lg:grid gap-10 grid-cols-7;
  }
}
</style>
