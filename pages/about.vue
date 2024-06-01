<script setup lang="ts">

/*About Us page.
This page presents a short presentation of SheRise
*/

useSeoMeta({
  title: 'SheRise | About',
  description: 'This is the about page with a brief history of the organization and its history.',
});

</script>

<template>
  <div class="page-content">
    <div class="page-title-container">
      <p class="orientational-info">About us</p>
      <h1 class="page-title">Our mission</h1>
    </div>
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
    <div class="about-image-div">
      <img class="about-image" src="assets/img/about-us.jpg" alt="The center" />
    </div>
    <div class="history-content">
      <h2 class="page-title">Our story</h2>
      <p class="p-alt">Founded in 1998, our center began as a small volunteer-led initiative in response to the rising need for support services for women and children experiencing domestic violence in Los Angeles. Initially operating out of a modest community space, our dedicated founders sought to create a sanctuary where victims could find immediate refuge and comprehensive assistance.</p>
      <p class="p-alt">Over the years, through persistent advocacy and community support, we expanded our services and facilities, evolving into a multifaceted organization with a professional team of psychologists, lawyers, social workers, and advocates.</p>
      <p class="p-alt">Today, we proudly operate a state-of-the-art facility and a wide range of outreach programs, continually adapting to meet the evolving needs of our community while staying true to our roots of empathy, empowerment, and unwavering support.</p>
    </div>
  </div>
</template>

<style scoped>
.about-image {
  max-width: min(1000px, 90%);
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
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

.p-alt {
  color: var(--par-color);
  line-height: 1.65rem;
}

.history-content {
  margin-bottom: 50px;
}
</style>