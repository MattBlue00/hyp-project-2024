<script setup lang="ts">
interface Props {
  h1Content?: string;
  h2Content?: string;
  h3Content?: string;
}

const { h1Content, h2Content, h3Content } = defineProps<Props>();
</script>

<template>
  <section>
    <div class="page-title-container">
      <h2 v-if="h2Content" class="orientational-info">{{h2Content}}</h2>
      <h1 v-if="h1Content" class="page-title">{{h1Content}}</h1>
    </div>
    <h3 v-if="h3Content" class="p-alt">{{h3Content}}</h3>
  </section>
</template>

<style scoped>
.page-title-container {
  width: min(900px, 100%);
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.page-title {
  font-size: 2rem;
  color: var(--dark-color);
}

.orientational-info {
  font-size: 1.75rem;
  color: var(--orientational-info-color);
  margin: 0.75rem auto;
}

h3{
  font-size: 1.2rem;
}
</style>