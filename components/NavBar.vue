<script setup lang="ts">

</script>

<template>
  <nav>
    <NuxtLink to="/">HOME</NuxtLink>
    <NuxtLink to="/about">ABOUT US</NuxtLink>
    <NuxtLink to="/persons">ALL PERSONS</NuxtLink>
    <NuxtLink to="/activities">ALL ACTIVITIES</NuxtLink>
    <NuxtLink to="/activities/projects">OUR PROJECTS</NuxtLink>
    <NuxtLink to="/activities/services">OUR SERVICES</NuxtLink>
    <NuxtLink to="/contact">CONTACTS</NuxtLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 30px;
}
</style>