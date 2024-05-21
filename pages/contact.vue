<script setup lang="ts">

</script>

<template>
  <div class="page-content">
    <section class="page-title-container">
      <p class="orientational-info">Contacts</p>
      <h1 class="page-title">You are the focus of SheRise. Get in touch with us.</h1>
      <p>Whether it's by email, phone call, or in person at our center, choose the method of contacting us that best suits you.</p>
    </section>
    <section class="contacts-main">
      <div class="contacts-container">
        <h2 class="contacts-subtitle">Connect with SheRise</h2>
        <p>
          Address:
          <NuxtLink to="https://maps.app.goo.gl/3jX3g2nurzr6znDU6">2116 Arlington Ave # 200, Los Angeles, CA 90018, US</NuxtLink>
        </p>
        <p>
          Phone number:
          <NuxtLink to="https://www.ingindinf.polimi.it">+1 213 376 5344</NuxtLink>
        </p>
        <p>
          Email:
          <NuxtLink to="mailto:info@sherise.com">info@sherise.com</NuxtLink>
        </p>
        <h2 class="contacts-subtitle">Opening hours</h2>
        <p>
          Monday-Friday: 9:00-18:00
        </p>
        <p>
          Saturday: 9:00-13:00
        </p>
      </div>
      <img src="assets/img/center-contacts.png" alt="Picture of SheRise's center">
    </section>
    <iframe class="interactive_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2540201669135!2d-118.32002582477494!3d34.0373545185171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b868d1deaaab%3A0x8a0c33f5a5de44e1!2s2116%20Arlington%20Ave%20%23%20200%2C%20Los%20Angeles%2C%20CA%2090018%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1716307607129!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<style scoped>
.contacts-main{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
}
.contacts-subtitle{
  font-size: 1.5rem;
  color: var(--dark-color);
}
.interactive_map{
  height: 200px;
  width: 100%;
}
</style>