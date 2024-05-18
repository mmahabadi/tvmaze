<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Movie } from '@/types'
import IconPlay from '@/@ui/components/icons/IconPlay.vue'
import Image from '@/@ui/components/Image.vue'

type propType = Pick<Movie, 'name' | 'id'> & {
  image?: string
}

defineProps<propType>()
</script>
<template>
  <div class="show-item">
    <RouterLink :to="`/details/${id}`">
      <div>
        <Image :src="image" :alt="name" />
      </div>
      <div class="caption">
        <h3>{{ name }}</h3>
        <button>
          <IconPlay />
        </button>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.show-item {
  @apply overflow-hidden border border-gray-600 rounded-md p-1 transform duration-150;
  background-color: var(--bg-color);

  .caption {
    @apply absolute bottom-0 left-0 right-0 py-3 px-4 bg-black bg-opacity-70 text-white flex justify-between items-center;

    h3 {
      @apply overflow-hidden truncate font-semibold text-nowrap;
    }

    button {
      @apply flex justify-center items-center text-xs text-white transform duration-150 bg-white bg-opacity-20 rounded-md w-8 h-8;
      border: 2px solid var(--primary-color);
    }
  }

  &:hover {
    @apply relative scale-110 z-10;

    button {
      background-color: var(--primary-color);
    }
  }
  a {
    @apply w-full;
  }

  img {
    @apply w-full h-64 object-cover;
  }
}
</style>
