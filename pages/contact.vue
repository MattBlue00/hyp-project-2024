<script setup lang="ts">

useSeoMeta({
  title: 'SheRise | Contact',
  description: 'Get in touch with SheRise through email, phone, or visit our center. Our contact information and operating hours are provided here.',
});

</script>

<template>
  <div class="page-content">
    <div class="page-title-container">
      <p class="orientational-info">Contacts</p>
      <h1 class="page-title">You are the focus of SheRise. Get in touch with us.</h1>
    </div>
    <p class="p-alt">Whether it's by email, phone call, or in person at our center, choose the method of contacting us that best suits you.</p>
    <section class="contacts-main">
      <div class="contacts-container">
        <h2 class="contacts-subtitle">Connect with SheRise</h2>
        <p>
          <strong>Address: </strong>
          <NuxtLink to="https://maps.app.goo.gl/3jX3g2nurzr6znDU6" target="_blank">2116 Arlington Ave # 200, Los Angeles, CA 90018, US</NuxtLink>
        </p>
        <p>
          <strong>Phone number: </strong>
          <a href="tel:+12133765344">+1 213 376 5344</a>
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:info@sherise.com">info@sherise.com</a>
        </p>
        <h2 class="contacts-subtitle">Opening hours</h2>
        <p>
          <strong>Monday-Friday: </strong> 9:00-18:00
        </p>
        <p>
          <strong>Saturday: </strong> 9:00-13:00
        </p>
      </div>
      <img class="contact-image" src="assets/img/center-contacts.png" alt="Picture of SheRise's center">
    </section>
    <iframe class="interactive-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2540201669135!2d-118.32002582477494!3d34.0373545185171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b868d1deaaab%3A0x8a0c33f5a5de44e1!2s2116%20Arlington%20Ave%20%23%20200%2C%20Los%20Angeles%2C%20CA%2090018%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1716307607129!5m2!1sit!2sit" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>

.p-alt {
  color: var(--par-color);
  line-height: 1.65rem;
}

.contacts-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
}

.contacts-container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

.contacts-subtitle {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin: 1rem 0;
}

.contacts-container p {
  margin: 0.5rem 0;
}

.contacts-container a {
  color: var(--primary-color);
  text-decoration: none;
}

.contacts-container a:hover {
  text-decoration: underline;
}

.contact-image {
  max-width: 100%;
  height: auto;
  border-radius: 1.25rem;
}

.interactive-map {
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 1.25rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .contacts-main {
    flex-direction: row;
    align-items: flex-start;
  }

  .contacts-container {
    text-align: left;
  }

  .contact-image {
    margin-left: 2rem;
  }
}
</style>