<script setup lang="ts">

import type {Service} from '~/types/Service';
import type {Testimonial} from "~/types/Testimonial";
import {handleFetchError} from "~/composables/errorHandlers";
import TestimonialsCarousel from "~/components/carousels/TestimonialsCarousel.vue";
import ServiceInfoContainer from "~/components/containers/ServiceInfoContainer.vue";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import type {Person} from "~/types/Person";
import PersonCard from "~/components/cards/PersonCard.vue";

useSeoMeta({
  title: 'SheRise | Service',
  description: 'This is the single service page with all relevant details about a service.',
});

const { id } = useRoute().params;

// Computed property per convertire id in numero
const numericId = computed(() => {
  return Number(id);
});

// Computed properties per calcolare prevId e nextId
const prevId = computed(() => {
  return numericId.value - 1;
});

const nextId = computed(() => {
  return numericId.value + 1;
});

// fetch the service information
const {
  data: service,
  pending: is_service_loading,
  error: service_error,
} = await useLazyFetch<Service>('/api/service/getServiceById', {
  query: {
    id: id,
  },
});
if (service_error.value?.statusCode) {
  // throw error if something went wrong during the fetch
  if (service_error.value?.statusCode) {
    handleFetchError(service, service_error.value.statusCode);
  }
}

// fetch the testimonials of the service
const {
  data: testimonials,
  pending: are_testimonials_loading,
  error: testimonials_error,
} = await useLazyFetch<Testimonial[]>('/api/testimonial/getTestimonialsByServiceId', {
  query: {
    service_id: id,
  },
});
if (testimonials_error.value?.statusCode){
  handleFetchError(testimonials, testimonials_error.value.statusCode);
}

const supervisorId = computed(() => {
  return service.value?.supervisor_id;
});

// fetch the supervisor information
const {
  data: person,
  pending: is_person_loading,
  error: person_error,
} = await useLazyFetch<Person>('/api/person/getPersonById', {
  query: {
    id: supervisorId,
  },
});
if (person_error.value?.statusCode) {
  // throw error if something went wrong during the fetch
  if (person_error.value?.statusCode) {
    handleFetchError(person, person_error.value.statusCode);
  }
}

const altPicture = computed(() => {
  return "Picture of the '" + service.value?.name +"' service";
});


//TODO: compute alt supervisor picture
</script>

<template>
  <div>
    <h1 class="service-title">{{ service.name }}</h1>
  </div>

  <div>
    <section class="service-img-and-person-card-container">
      <div v-if="is_service_loading">
        <Loader/>
      </div>
      <div v-else v-if="service">
        <nuxt-img class="service-img" :src="service.picture" :alt="altPicture"/>
      </div>
      <div v-if="is_person_loading">
        <Loader/>
      </div>
      <div class="supervisor-container" v-else v-if="person">
        <p class="supervised-by">Supervised By:</p>
        <NuxtLink class="clickable-card" :to="`/persons/${person?.id}`">
          <PersonCard :img="person?.picture" :name="person?.full_name" :main_role="person?.main_role" />
        </NuxtLink>
      </div>
    </section>

    <section class="service-description-and-service-info-container">
      <div v-if="is_service_loading">
        <Loader/>
      </div>
      <div v-else v-if="service">
        <DescriptionContainer :description="service?.description"/>
      </div>
      <div>
        <ServiceInfoContainer
            :opening_hours="service?.opening_hours"
            :duration="service?.duration"
            :contacts="service?.contacts"
        />
      </div>
    </section>

    <section>
      <div v-if="are_testimonials_loading">
        <Loader/>
      </div>
      <div v-else v-if="testimonials">
        <TestimonialsCarousel class="testimonials-carousel" :testimonials="testimonials"/>
      </div>
    </section>

    <section class="group-links">
      <NuxtLink class="prev-link" v-if="numericId > 1" :to="`/activities/services/${prevId}`">
        <Button value="Prev"/>
      </NuxtLink>
      <NuxtLink class="next-link" v-if="numericId < 5" :to="`/activities/services/${nextId}`">
        <Button value="Next"/>
      </NuxtLink>
      <!-- TODO: remove hardcoded max bound -->
    </section>
  </div>
</template>

<style scoped>
.service-title{
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.service-img-and-person-card-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}

.service-img{
  display: flex;
  margin-left: 26rem;
  width: 40%;
}

.supervisor-container{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  width: 18rem;
  height: 18.75rem;
  margin-right: 26rem;
  background-color: #FFE4EB;
  padding: 1rem;
}

.service-description-and-service-info-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}

.supervised-by{
  color: #C30753;
}

.clickable-card{
  box-shadow: 0rem 0rem 0rem #888888;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  text-decoration: none;
}

.testimonials-carousel{
  margin-left: 7%;
  margin-right: 7%;
}

.group-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.prev-link{
  display: flex;
}

.next-link{
  display: flex;
}

</style>