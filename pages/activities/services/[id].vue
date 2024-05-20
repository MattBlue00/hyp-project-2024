<script setup lang="ts">

import type {Service} from '~/types/Service';
import type {Testimonial} from "~/types/Testimonial";
import {handleFetchError} from "~/composables/errorHandlers";
import TestimonialsCarousel from "~/components/carousels/TestimonialsCarousel.vue";
import ServiceInfoContainer from "~/components/containers/ServiceInfoContainer.vue";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";

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

// TODO: compute alt service picture

</script>

<template>
  <div v-if="is_service_loading">
    <Loader/>
  </div>
  <div v-else v-if="service">
    <ServiceInfoContainer
        :opening_hours="service?.opening_hours"
        :duration="service?.duration"
        :contacts="service?.contacts"
    />
    <DescriptionContainer :description="service?.description"/>
    <div v-if="are_testimonials_loading">
      <Loader/>
    </div>
    <div v-else v-if="testimonials">
      <TestimonialsCarousel class="testimonials-carousel" :testimonials="testimonials"/>
    </div>
  </div>
</template>

<style scoped>
.testimonials-carousel{
  margin-left: 7%;
  margin-right: 7%;
}
</style>