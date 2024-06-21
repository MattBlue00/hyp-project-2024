<script setup lang="ts">
import type {Testimonial} from "~/types/Testimonial";
import TestimonialCard from "~/components/cards/TestimonialCard.vue";
import {handleFetchError} from "~/composables/errorHandlers";
import CustomButton from "~/components/buttons/CustomButton.vue";

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
          <h1 class="logo-text"> SheRise </h1>
        </div>
      </div>
      <h2 class="logo-caption"> Always by your side </h2>
    </section>

    <!-- home main content -->
    <section>
      <div>
        <div class="home-container">
          <div class="home-img-container">
            <img class="home-img" id="img1" src="assets/img/home-img-1.jpg" alt="">
          </div>
          <div class="home-subtitle-text-button" id="hstb1">
            <h3 class="home-subtitle">Every day</h3>
            <p class="home-text">
              countless women around the world face myriad forms of violence. These experiences leave profound, often hidden scars. Despite the overwhelming weight of these challenges, it's vital to understand that you are never isolated in this struggle. Support and resources are readily available to empower and uplift you.
            </p>
            <CustomButton class="home-button" to="/contact" value="Contact SheRise" width="auto"/>
          </div>
        </div>
        <div class="home-container">
          <div class="home-subtitle-text-button" id="hstb2">
            <h3 class="home-subtitle">SheRise Center</h3>
            <p class="home-text">
              provides support for women who have faced violence, offering a variety of essential projects and services. Our commitment lies in creating a safe, supportive environment where every woman can regain control of her life, heal from trauma, and rebuild a future with dignity and hope.
            </p>
            <CustomButton class="home-button" to="/activities" value="What we do" />
          </div>
          <div class="home-img-container">
            <img class="home-img" id="img2" src="assets/img/home-img-2.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- witnesses -->
    <section>
      <h2 class="witnesses-text"> Witnesses</h2>
      <div class="witnesses-container">
        <div v-for="testimonial in testimonials">
            <div v-if="are_testimonials_loading">
              <Loader />
            </div>
            <div v-else v-if="testimonials">
              <TestimonialCard
                  class="witnesses-card"
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
  margin-bottom: 4rem;
}

.home-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  background-color: #FFE4EB;
  border-radius: 1rem;
  gap: 2rem;
}

.home-subtitle-text-button{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

#hstb1{
  padding-right: 2rem;
}

#hstb2{
  padding-left: 2rem;
}

.home-img{
  display: flex;
  width: 100%;
  height: 100%;
}

.home-img-container{
  min-width: 25rem;
}

#img1{
  border-radius: 1rem 0 0 1rem;
}

#img2{
  border-radius: 0 1rem 1rem 0;
}

.home-subtitle{
  font-size: 2.5rem;
  font-family: Nunito,serif;
}

.home-text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #400E2A;
  font-size: 1.25rem;
}

.home-button{
  align-self: end;
}

.witnesses-container{
  margin-bottom: 4rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
}

.witnesses-text{
  text-align: center;
  color: #400E2A;
  margin-bottom: 3rem;
}

.witnesses-card{
  background-color: #FFE4EB;
  border-radius: 1rem;
  padding: 2rem;
}

@media(max-width: 1200px){
  .home-container{
    flex-direction: column;
    gap: 1rem;
  }

  .home-subtitle-text-button{
    text-align: center;
    padding: 1rem;
    gap: 1rem;
  }

  .home-button{
    align-self: center;
    padding-bottom: 1rem;
  }

  .home-img{
    width: 100%;
  }

  #img1{
    border-radius: 1rem 1rem 0 0;
  }

  #img2{
    border-radius: 0 0 1rem 1rem;
  }

  #hstb1{
    padding: 1rem;
  }

  #hstb2{
    padding: 1rem;
  }
}

</style>