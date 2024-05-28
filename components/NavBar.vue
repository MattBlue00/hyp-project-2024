<script setup lang="ts">
</script>

<template>
  <header class="nav-container">
    <nav class="nav-group">
        <div class="logo"><NuxtLink class="nuxt-link" to="/">SheRise</NuxtLink></div>
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
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    background-image: var(--gradient-color);
    color: var(--bg-color);
  }
  .nav-group {
    margin-left: min(5%,10em);
    margin-right: min(5%,10em);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-size: 2rem;
    font-family: Nunito;
    font-weight: bold;
    color: var(--bg-color);
  }
  .nav-links {
    font-family: Nunito;
    font-size: 1rem;
    padding: 0;
    display: flex;
    margin: 0;
    gap: 3rem;
    list-style: none;
  }
  .nuxt-link {
    color: var(--bg-color);
    cursor: pointer;
    text-decoration: none;
  }

  .nuxt-link:visited {
    color: var(--bg-color);
  }

</style>