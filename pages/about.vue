<script setup lang="ts">

/**
 * This topic page contains information about SheRise's history and mission.
 */

// imports
import MainPageInfoContainer from "~/components/containers/MainPageInfoContainer.vue";

// sets some HTML tags useful for SEO
useSeoMeta({
  title: 'SheRise | About Us',
  description: 'This is the about page with a brief history of the organization and its mission.',
});

</script>

<template>
  <main>

    <MainPageInfoContainer
      orientationalInfo="About us"
      pageTitle="Our mission"
    />

    <!-- SheRise's mission -->
    <p class="p-alt">At our organization, our mission is to provide unwavering support and compassionate care to women and children affected by violence.
      We are committed to fostering a safe, nurturing environment where individuals can heal and rebuild their lives.
    </p>
    <p class="p-alt">
      Our multidisciplinary team of experts offers comprehensive services, including psychological counseling,
      legal assistance, and emergency shelter, ensuring that each client receives personalized and holistic support.
    </p>
    <p class="p-alt">
      We pride ourselves on our empathy and reliability, standing by our clients every step of the way with a dedication
      to their well-being and empowerment. By advocating for systemic change and innovative solutions,
      we strive to create a community where every woman and child can thrive free from violence and fear.
    </p>

    <!-- Decorative image -->
    <div class="about-image-div">
      <img class="about-image" src="assets/img/about-us.jpg" alt="The center" />
    </div>

    <!-- SheRise's history -->
    <div class="history-content">
      <h2 class="page-title-container page-title">Our story</h2>
      <p class="p-alt">Founded in 1998, our center began as a small volunteer-led initiative in response to the rising need for support services for women and children experiencing domestic violence in Los Angeles. Initially operating out of a modest community space, our dedicated founders sought to create a sanctuary where victims could find immediate refuge and comprehensive assistance.</p>
      <p class="p-alt">Over the years, through persistent advocacy and community support, we expanded our services and facilities, evolving into a multifaceted organization with a professional team of psychologists, lawyers, social workers, and advocates.</p>
      <p class="p-alt">Today, we proudly operate a state-of-the-art facility and a wide range of outreach programs, continually adapting to meet the evolving needs of our community while staying true to our roots of empathy, empowerment, and unwavering support.</p>
    </div>

  </main>
</template>

<style scoped>
.about-image {
  max-width: min(1000px, 90%);
  border-radius: 1rem;
}

.about-image-div {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.overlapping-paragraph-sub h2 {
  margin-bottom: 1rem;
}

.history-content {
  margin-bottom: 3rem;
}

h2{
  margin-bottom: 1rem;
}
</style>