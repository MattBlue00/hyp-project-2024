<script setup lang="ts">

import type {Service} from '~/types/Service';
import type {Testimonial} from "~/types/Testimonial";
import {handleFetchError} from "~/composables/errorHandlers";
import TestimonialsCarousel from "~/components/carousels/TestimonialsCarousel.vue";
import ServiceInfoContainer from "~/components/containers/ServiceInfoContainer.vue";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import type {Person} from "~/types/Person";
import ActivityImageAndSupervisorCardContainer
  from "~/components/containers/ActivityImageAndSupervisorCardContainer.vue";
import GroupLinksContainer from "~/components/containers/GroupLinksContainer.vue";

useSeoMeta({
  title: 'SheRise | Service',
  description: 'This is the single service page with all relevant details about a service.',
});

const { id } = useRoute().params;

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

</script>

<template>
  <div>
    <h1 class="service-title">{{ service.name }}</h1>
  </div>

  <div>
    <section>
      <div v-if="is_service_loading || is_person_loading">
        <Loader/>
      </div>
      <ActivityImageAndSupervisorCardContainer v-else v-if="service && person" :activity="service" :supervisor="person" />
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

    <section>
      <GroupLinksContainer :id="useRoute().params.id" :type="'service'"/>
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

.service-description-and-service-info-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}

.testimonials-carousel{
  margin-left: 7%;
  margin-right: 7%;
}

</style>