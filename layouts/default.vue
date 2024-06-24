<script setup lang="ts">
/**
 * This is the default layout all of SheRise's pages are built from.
 */

// imports
import FloatingButton from "~/components/buttons/FloatingButton.vue";

// adds some HTML tags
useHead({
  htmlAttrs: {
    lang: 'en'
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