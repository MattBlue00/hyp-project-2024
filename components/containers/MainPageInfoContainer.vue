<script setup lang="ts">
interface Props {
  pageTitle?: string;
  orientationalInfo?: string;
  introduction?: string;
}

const { pageTitle, orientationalInfo, introduction } = defineProps<Props>();
</script>

<template>
  <section>
    <div class="page-title-container">
      <h1 v-if="orientationalInfo" class="orientational-info">{{ orientationalInfo }}</h1>
      <h2 v-if="pageTitle" class="page-title">{{ pageTitle }}</h2>
    </div>
    <h3 v-if="introduction" class="p-alt">{{ introduction }}</h3>
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
  color: var(--dark-violet-color);
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