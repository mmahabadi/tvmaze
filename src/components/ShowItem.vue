<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Movie } from '@/types'
import IconPlay from '@/components/icons/IconPlay.vue'
defineProps<{ item: Movie }>()
</script>
<template>
  <div v-if="item" class="show-item transitions">
    <RouterLink :to="`/details/${item.id}`">
      <div>
        <img v-if="item.image?.medium" :src="item.image?.medium" :alt="item.name" />
        <img v-else src="@/assets/image-placeholder.jpg" alt="image-placeholder" />
      </div>
      <div class="caption">
        <h3>{{ item.name }}</h3>
        <button class="transitions">
          <IconPlay />
        </button>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.show-item {
  border: 1px solid rgb(75 85 99);
  padding: 0.25rem;
  border-radius: 0.25rem;
  transform: scale(1);
  overflow: hidden;
  background-color: var(--bg-color);

  &:hover {
    transform: scale(1.1);
    z-index: 1000;
    position: relative;

    button {
      background-color: var(--primary-color);
    }
  }
  a {
    width: 100%;
  }

  img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }

  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      font-size: 0.8rem;
      line-height: 1.25rem;
      border: 2px solid var(--primary-color);

      color: var(--text-color);
      border-radius: 0.4rem;
    }
  }
}
</style>
