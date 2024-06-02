<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CustomButton from '~/components/buttons/CustomButton.vue';
import Loader from '~/components/Loader.vue';

useSeoMeta({
  title: 'SheRise | Contacts',
  description: 'Get in touch with SheRise through email, phone, or visit our center. Our contact information and operating hours are provided here.',
});

const iframeLoaded = ref(false);
const iframeRef = ref<HTMLIFrameElement | null>(null);

const onIframeLoad = () => {
  iframeLoaded.value = true;
};

onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener('load', onIframeLoad);
  }
});

onBeforeUnmount(() => {
  if (iframeRef.value) {
    iframeRef.value.removeEventListener('load', onIframeLoad);
  }
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
        <div class="buttons-grid">
          <CustomButton value="Follow us on LinkedIn" left-icon="uil:linkedin" width="16rem" to="https://www.linkedin.com"/>
          <CustomButton value="Follow us on Facebook" left-icon="uil:facebook" width="16rem" to="https://www.facebook.com"/>
          <CustomButton value="Follow us on X" left-icon="simple-icons:x" width="16rem" to="https://www.twitter.com"/>
        </div>
        <h2 class="contacts-subtitle">Opening hours</h2>
        <p>
          <strong>Monday-Friday: </strong> 9:00 AM to 6:00 PM
        </p>
        <p>
          <strong>Saturday: </strong> 9:00 AM to 6:00 PM
        </p>
      </div>
      <img class="contact-image" src="assets/img/center-contacts.png" alt="Picture of SheRise's center">
    </section>
    <section class="interactive-map-container">
      <h2 class="contacts-subtitle">Find our center with the Interactive Map</h2>
      <div v-if="!iframeLoaded">
        <Loader />
      </div>
      <iframe v-show="iframeLoaded" ref="iframeRef" class="interactive-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2540201669135!2d-118.32002582477494!3d34.0373545185171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b868d1deaaab%3A0x8a0c33f5a5de44e1!2s2116%20Arlington%20Ave%20%23%20200%2C%20Los%20Angeles%2C%20CA%2090018%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1716307607129!5m2!1sit!2sit" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </div>
</template>

<style scoped>
.p-alt {
  color: var(--par-color);
  line-height: 1.65rem;
}

.contacts-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
}

.contacts-container {
  flex: 1;
  text-align: left;
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
  color: var(--dark-color);
  text-decoration: none;
}

.contacts-container a:hover {
  text-decoration: underline;
}

.contact-image {
  flex: 2;
  border-radius: 1rem;
}

.interactive-map-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.interactive-map {
  width: 100%;
  height: 20rem;
  border: none;
}

.buttons-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .contacts-main {
    flex-direction: column;
    align-items: flex-start;
  }

  .contacts-container {
    text-align: left;
    padding: 0;
  }

  .contact-image {
    margin-left: 2rem;
  }
}
</style>