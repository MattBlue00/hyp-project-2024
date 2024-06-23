<script setup lang="ts">

</script>

<template>
  <div class="loader-container">
    <img src="assets/img/loading.svg" class="loader-icon" alt="Loading..."/>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
}
.loader-icon {
  color: var(--magenta-color);
  animation: spin 1.5s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>