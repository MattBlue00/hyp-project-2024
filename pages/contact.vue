<script setup lang="ts">

/**
 * This topic page contains information about how to contact SheRise and about how to find its center.
 */

// imports
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CustomButton from '~/components/buttons/CustomButton.vue';
import Loader from '~/components/Loader.vue';
import MainPageInfoContainer from "~/components/containers/MainPageInfoContainer.vue";

// sets some HTML tags useful for SEO
useSeoMeta({
  title: 'SheRise | Contacts',
  description: 'Get in touch with SheRise through email, phone, or visit our center. Our contact information and operating hours are provided here.',
});

// stores some references to HTML variables and elements
const iframeLoaded = ref(false);
const iframeRef = ref<HTMLIFrameElement | null>(null);

// fires when iframe (interactive map) is loaded
const onIframeLoad = () => {
  iframeLoaded.value = true;
};

// adds listener to iframe's load event
onMounted(() => {
  if (iframeRef.value) {
    iframeRef.value.addEventListener('load', onIframeLoad);
  }
});

// removes listener from iframe
onBeforeUnmount(() => {
  if (iframeRef.value) {
    iframeRef.value.removeEventListener('load', onIframeLoad);
  }
});

</script>

<template>
  <main>

    <MainPageInfoContainer
        orientationalInfo="Contacts"
        pageTitle="You are the focus of SheRise. Get in touch with us."
        introduction="Whether it's by email, phone call, or in person at our center, choose the method of contacting us that best suits you."
    />

    <!-- SheRise's contacts -->
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
          <strong>Saturday: </strong> 9:00 AM to 1:00 PM
        </p>
      </div>
      <!-- Decorative image -->
      <img class="contact-image" src="assets/img/center-contacts.png" alt="Picture of SheRise's center">
    </section>

    <!-- Interactive map to find SheRise's center -->
    <section class="interactive-map-container">
      <h2 class="contacts-subtitle">Find our center with the Interactive Map</h2>
      <div v-if="!iframeLoaded">
        <Loader />
      </div>
      <iframe v-show="iframeLoaded" ref="iframeRef" title="Google Interactive Map" class="interactive-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2540201669135!2d-118.32002582477494!3d34.0373545185171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b868d1deaaab%3A0x8a0c33f5a5de44e1!2s2116%20Arlington%20Ave%20%23%20200%2C%20Los%20Angeles%2C%20CA%2090018%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1716307607129!5m2!1sit!2sit" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>

  </main>
</template>

<style scoped>
.contacts-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem 0;
}

.contacts-container {
  width: 30%;
  text-align: left;
}

.contacts-subtitle {
  font-size: 1.5rem;
  color: var(--dark-violet-color);
  margin: 1rem 0;
}

.contacts-container p {
  margin: 0.5rem 0;
}

.contacts-container a {
  color: var(--dark-violet-color);
  text-decoration: none;
}

.contacts-container a:hover {
  text-decoration: underline;
}

.contact-image {
  border-radius: 1rem;
  width: 60%;
}

.interactive-map-container {
  padding-top: 2rem;
  padding-bottom: 4rem;
}

.interactive-map {
  width: 100%;
  height: 20rem;
  border: none;
}

.buttons-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

@media (max-width: 860px) {
  .contacts-main {
    flex-direction: column;
    align-items: center;
  }

  .contacts-container {
    text-align: left;
    padding: 0;
    width: 100%;
  }

  .contact-image {
    width: 100%;
  }
}
</style>