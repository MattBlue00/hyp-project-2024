<script setup lang="ts">
</script>

<template>
  <nav>
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
          <button class="nav-btn" aria-label="toggle menu">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </nav>
    </header>
  </nav>
</template>

<style scoped>
.nav-container {
  padding: 0.5rem;
  top: 0;
}
.nav-group {
    margin: 0 auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.logo {
    font-size: 1.5rem;
    font-family: Inter;
}
.nav-links {
    padding: 0;
    list-style: none;
    display: flex;
    margin: 0;
    gap: 3.5rem;
}
.nuxt-link {
    color: var(--par-color-alt);
    cursor: pointer;
}
.nav-btn {
    display: none;
}
.nav-links-mobile {
    display: none;
    overflow: hidden;
}
.active-link {
    text-decoration: underline;
    text-underline-offset: 2px;
}
</style>