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
          <NuxtLink to="https://maps.app.goo.gl/6gBeZrcbR37Hg8727">Via Vipacco 34 - 20126 Milano</NuxtLink>
        </p>
        <p>
          Phone number:
          <NuxtLink to="https://www.ingindinf.polimi.it">+39 06 376 5344</NuxtLink>
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
    <iframe class="interactive_map" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d11902.630781741746!2d9.215155994114705!3d45.51615816500808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m5!1s0x4786c742105deb79%3A0x363e5d4a6c0484ed!2sVia%20Vipacco%2C%20Milano%20MI!3m2!1d45.517641499999996!2d9.22383!4m0!5e0!3m2!1sit!2sit!4v1714992438386!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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