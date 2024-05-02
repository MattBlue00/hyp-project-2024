<script setup lang="ts">

interface Props {
  img?: string;
  name?: string;
  statement?: string;
  isActive?: boolean;
  altText: string;
}

const { img, name, statement, isActive, altText } = defineProps<Props>();
</script>

<template>
  <div :class="['carousel-item', isActive ? 'active' : '']">
    <nuxt-img class="d-block w-100" :src="img" :alt="altText"/>
    <p>{{ name }}</p>
    <p>{{ statement }}</p>
  </div>
</template>

<style scoped>

</style>