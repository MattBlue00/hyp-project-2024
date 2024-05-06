<script setup lang="ts">
</script>

<template>
  <header class="nav-container">
    <nav class="nav-group">
        <div class="logo"><NuxtLink class="nuxt-link" to="/">TEAGREEN</NuxtLink></div>
        <ul class="nav-links">
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/about">ABOUT US</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/persons">OUR TEAM</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities">ACTIVITIES</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/projects">PROJECTS</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/services">SERVICES</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/contact">CONTACTS</NuxtLink></li>
        </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-container {
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: #DA0E5F;
  color: #FFFAF1;
}
.nav-group {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  font-size: 2.5rem;
  font-family: Montserrat;
  font-weight: bold;
  color: #FFFAF1;
}
.nav-links {
  font-family: Lato;
  font-size: 1.25rem;
  padding: 0;
  display: flex;
  margin: 0;
  gap: 3rem;
  list-style: none;
}
.nuxt-link {
  color: #FFFAF1;
  cursor: pointer;
  text-decoration: none;
}

.nuxt-link:visited {
  color: #FFFAF1;
}

@media screen and (max-width: 1090px) {
  .nav-links {
    display: none;
  }
}
</style>