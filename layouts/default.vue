<script setup lang="ts">
import FloatingButton from "~/components/buttons/FloatingButton.vue";
</script>

<template>
  <NavBar/>
  <FloatingButton/>
  <slot/>
  <Footer/>
</template>

<style scoped>
</style>