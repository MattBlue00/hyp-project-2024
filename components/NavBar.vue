<script setup lang="ts">
/**
 * This component describes the navigation bar of the site, it comprises landmarks for the homepage, about us, our team,
 * activities, projects, services and contacts pages. It changes its appearance when used on mobile.
 */

// mobile navbar toggle system
let showMobileNav = ref(false);

/**
 * Function for toggling the menu on mobile version
 */
const toggleMenu = () => {
  showMobileNav.value = !showMobileNav.value;
  document.querySelector('body')?.classList.toggle('disable-scrolling');
};

/**
 *  Function for closing the menu on the mobile version
 */
const closeMenuOnLink = () => {
  if (showMobileNav.value === true) {
    showMobileNav.value = false;
    document.querySelector('body')?.classList.remove('disable-scrolling');
  }
};

</script>

<template>
  <header class="nav-container">
    <nav class="nav-group">
      <NuxtLink class="nuxt-link" to="/" @click="closeMenuOnLink">
        <div class="logo">
          <img class="logo-image" src="assets/img/logo-white.png" alt="SheRise's logo">
          SheRise
        </div>
      </NuxtLink>
        <ul class="nav-links">
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/about">ABOUT US</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/persons">OUR TEAM</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities">ACTIVITIES</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/projects">PROJECTS</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/services">SERVICES</NuxtLink></li>
            <li><NuxtLink class="nuxt-link" active-class="active-link" to="/contact">CONTACTS</NuxtLink></li>
        </ul>
      <button @click="toggleMenu" class="nav-btn" :class="showMobileNav ? 'close-icon' : ''" aria-label="toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>

    <div class="menu-mobile" :class="showMobileNav === true ? 'open-menu' : 'close-menu'">
      <ul class="nav-links-mobile">
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/about" @click="closeMenuOnLink">ABOUT US</NuxtLink></li>
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/persons" @click="closeMenuOnLink">OUR TEAM</NuxtLink></li>
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities" @click="closeMenuOnLink">ACTIVITIES</NuxtLink></li>
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/projects" @click="closeMenuOnLink">PROJECTS</NuxtLink></li>
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/activities/services" @click="closeMenuOnLink">SERVICES</NuxtLink></li>
        <li><NuxtLink class="nuxt-link" active-class="active-link" to="/contact" @click="closeMenuOnLink">CONTACTS</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

.logo{
  display: flex;
  flex-direction: row;
}

.nav-container {
  box-sizing: border-box;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  background-image: var(--gradient-color);
  color: var(--bg-color);
  position: sticky;
  top: 0;
  z-index: 5;
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
  font-family: Nunito, serif;
  font-weight: bold;
  color: var(--bg-color);
}

.logo-image{
  height: 3rem;
  margin-right: 0.5rem;
}

.nav-links {
  font-family: Nunito, serif;
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

/* Mobile responsiveness */
/* These three following classes disable mobile menu on larger devices */

.nav-btn {
  display: none;
}

.nav-links-mobile {
  display: none;
  overflow: hidden;
}

@media (max-width: 1000px) {

  /* These three following classes disable desktop menu on smaller devices */
  .nav-links {
    display: none;
  }

  .nav-group {
    align-items: center;
  }

  /* Styling of the mobile menu */

  .close-menu {
    transition: 0.3s ease-in all;
    visibility: hidden;
    width: 0;
  }

  .open-menu {
    transition: 0.3s ease-in all;
    visibility: visible;
    width: 100%;
    overflow: hidden;
  }

  .menu-mobile {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    background-image: var(--gradient-color);
  }

  .nav-links-mobile {
    margin-top: 4rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    align-items: center;
    min-height: 60%;
    padding: 0;
    font-size: 1.2rem;
  }

  /* Styling of the mobile-menu button */

  .nav-btn {
    display: flex;
    flex-direction: column;
    width: 30px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
  }

  .nav-btn span {
    background-color: var(--bg-color);
    height: 3px;
    margin: 3px;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    border-radius: 2px;
  }

  span {
    width: 100%;
  }

  .close-icon span:nth-child(1) {
    transform: translate(5px, 0) rotatez(45deg) translate(0, 12px);
    width: 100%;
  }

  .close-icon span:nth-child(2) {
    width: 0;
  }

  .close-icon span:nth-child(3) {
    width: 100%;
    transform: translate(5px, 0) rotatez(-45deg) translate(0, -12px);
  }
}

</style>