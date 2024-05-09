<script setup lang="ts">
</script>

<template>
  <NavBar/>
  <FloatingButton/>
  <div class="content">
    <slot/>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>