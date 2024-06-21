<script setup lang="ts">
import type {Testimonial} from "~/types/Testimonial";
import TestimonialCard from "~/components/cards/TestimonialCard.vue";
import {handleFetchError} from "~/composables/errorHandlers";

useSeoMeta({
  title: 'SheRise | Home',
  description: 'This is the home page of SheRise with aggregated information about the company\'s activities.',
});

// fetch the testimonials of the service
const {
  data: testimonials,
  pending: are_testimonials_loading,
  error: testimonials_error,
} = await useLazyFetch<Testimonial[]>('/api/testimonial/getRandomTestimonials');
if (testimonials_error.value?.statusCode){
  handleFetchError(testimonials, testimonials_error.value.statusCode);
}

</script>

<template>
  <main>
    <!-- SheRise logo -->
    <section>
      <div class="logo-container">
        <img class="logo-img" src="assets/img/logo.jpg" alt="SheRise logo"/>
        <div class="logo-text-container">
          <div class="logo-text"> SheRise </div>
        </div>
      </div>
      <div class="logo-caption"> Always by your side </div>
    </section>

    <!-- home main content -->
    <section>
      <div>
        <div class="home-container">
          <img class="home-img" src="assets/img/home-img-1.jpg" alt="">
          <p class="home-text">
            Every day, countless women around the world face myriad forms of violence. These experiences leave profound, often hidden scars. Despite the overwhelming weight of these challenges, it's vital to understand that you are never isolated in this struggle. Support and resources are readily available to empower and uplift you. Remember, reaching out for assistance is not just a step towards safety and healing, but a courageous act of reclaiming your dignity and strength. You deserve to live free from fear and to flourish in your own journey of recovery and resilience.
          </p>
        </div>
        <div class="home-container">
          <p class="home-text">
            The SheRise Center provides support for women who have faced violence, offering a variety of essential projects and services. These include personalized counseling sessions, legal advocacy, educational workshops, and safe housing options, all aimed at empowering recovery and fostering resilience. Our commitment lies in creating a safe, supportive environment where every woman can regain control of her life, heal from trauma, and rebuild a future with dignity and hope.          </p>
          <img class="home-img" src="assets/img/home-img-2.jpg" alt="">
        </div>
      </div>
    </section>

    <!-- witnesses -->
    <section>
      <div class="witnesses-container">
        <p class="witnesses-text"> Witnesses</p>
        <div v-for="testimonial in testimonials">
            <div v-if="are_testimonials_loading">
              <Loader />
            </div>
            <div v-else v-if="testimonials">
              <TestimonialCard
                  :key="testimonial.id"
                  :img="testimonial.author_picture"
                  :name="testimonial.author_full_name"
                  :statement="testimonial.statement"
                  :isActive="true"
              />
            </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>

.logo-container{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.logo-img{
  display: flex;
  height: 10rem;
  width: 7rem;
}

.logo-text-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
}

.logo-text{
  display: flex;
  font-size: 5rem;
  color: #DA0E5F;
}

.logo-caption{
  text-align: center;
  color: #DA0E5F;
  font-size: 1.25rem;
  margin-bottom: 4rem;
}

.home-container{
  display: flex;
  justify-content: center;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-bottom: 4rem;
  background-color: #FFE4EB;
}

.home-img{
  display: flex;
  height: 20rem;
  width: 20rem;
}

.home-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #400E2A;
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.witnesses-container{
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
}

.witnesses-text{
  text-align: center;
  font-size: 1.5rem;
  color: #400E2A;
}


</style>