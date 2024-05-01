<script setup lang="ts">

import type {Service} from '~/types/Service';
import type {Testimonial} from "~/types/Testimonial";
import {handleFetchError} from "~/composables/errorHandlers";

useSeoMeta({
  title: 'SheRise | Service',
  description: 'This is the single person page with all relevant details about a team member.',
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

// TODO: compute alt picture

</script>

<template>
  <div v-if="is_service_loading">
    <!--TODO: <LoaderComponent/> -->
  </div>
  <div v-else v-if="service">
    <nuxt-img :src="service?.picture" alt="Service's picture"/>
  </div>
  <div v-else>
    ERROR
  </div>
</template>

<style scoped>

</style>