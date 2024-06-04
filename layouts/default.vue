<script setup lang="ts">
import FloatingButton from "~/components/buttons/FloatingButton.vue";

useHead({
  htmlAttrs: {
    lang: 'en' // Set your desired language here
  }
})
</script>

<template>
  <NavBar/>
  <FloatingButton/>
  <slot/>
  <Footer/>
</template>

<style scoped>
</style>