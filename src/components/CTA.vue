<script setup lang="ts">
import IconUser from '@/components/icons/IconUser.vue'
</script>
<template>
  <div class="my-20 py-10 md:px-20 px-8 bg-gray-900">
    <div class="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
      <div class="flex lg:gap-10 gap-6 flex-col">
        <h1 class="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
          Download Your Movies Watch Offline. <br />
          Enjoy on Your Mobile
        </h1>
        <p class="text-text text-sm xl:text-base leading-6 xl:leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries..
        </p>
        <div class="flex gap-4 md:text-lg text-sm">
          <div class="flex bg-black text-teal-500 px-6 py-3 rounded font-bold">HD 4K</div>
          <div
            class="flex gap-4 justify-center items-center bg-black text-teal-500 px-6 py-3 rounded font-bold"
          >
            <IconUser />
            2K
          </div>
        </div>
      </div>
      <div><img src="@/assets/mobile.png" alt="Mobile app" class="w-full object-contain" /></div>
    </div>
  </div>
</template>
