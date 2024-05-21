<script setup lang="ts">
/**
 * Component name: Footer
 * Description: this is the default footer
 * present on the bottom of all pages, it is a fixed component,
 * and it is responsive for mobile devices.
 *
 */
</script>
<template>
  <div class ="footer-box">
    <div class="footer-text-container">
      <p class="footer-title">SHERISE L.t.d.</p>
      <p class="footer-title-2">EIN SHERISE – 12375322943</p>
      <p class="footer-title-3">2116 Arlington Ave # 200, Los Angeles, CA 90018, US
      </p>
      <p class="footer-title-3">Phone number: +1 213 376 5344</p>
      <p class="footer-title-3">info@sherise.com</p>
    </div>
    <hr class="divider" />
    <div class="footer-social-container">
      <div>
        <p>
          © 2024 SHERISE Ltd All rights reserved.
          <NuxtLink class="footer-anchor" to="https://www.google.com/">Privacy Policy</NuxtLink>
          ·
          <NuxtLink class="footer-anchor" to="https://www.deib.polimi.it/eng/people/details/1118154">Cookie Policy</NuxtLink>
        </p>
      </div>
      <div class="footer-icon-container">
        <NuxtLink to="https://www.linkedin.com" class="footer-anchor" aria-label="Go to linkedin">
          <Icon name="uil:linkedin" />
        </NuxtLink>
        <NuxtLink to="https://www.facebook.com" class="footer-anchor" aria-label="Go to facebook">
          <Icon name="uil:facebook" />
        </NuxtLink>
        <NuxtLink to="https://www.twitter.com" class="footer-anchor" aria-label="Go to twitter">
          <Icon name="simple-icons:x" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
    margin: 1rem 0;
}

.footer-anchor {
    color: var(--bg-color);
}

.footer-anchor:visited {
    color: var(--bg-color);
}

.footer-box {
    padding: 4rem 0;
    background-color: var(--nbar-color);
    color: var(--bg-color);
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.footer-text-container {
    margin: 0 auto;
    width: var(--content-width);
    color: var(--bg-color);
}

.footer-icon-container {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
    font-size: 2.3rem;
}

.footer-social-container {
    margin: 0 auto;
    width: var(--content-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.footer-title {
    font-weight: 600;
}

.footer-title-2 {
    font-weight: 100;
    font-size: 0.9rem;
}

.footer-title-3 {
    font-weight: 100;
    font-size: 0.9rem;
    margin: 0.2rem;
}

hr.divider {
    border: 0;
    background-color: white;
    opacity: 1;
    width: var(--content-width);
    border-radius: 3px;
    padding: 1px;
}
</style>
