<script setup lang="ts">

/**
 * This kind-of-topic page contains all the details about a service with a given id.
 */

// imports
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

// gets the id of the service from the URL
const { id } = useRoute().params;

// fetch the service details
const {
  data: service,
  pending: is_service_loading,
  error: service_error,
} = await useFetch<Service>('/api/service/getServiceById', {
  query: {
    id: id,
  },
});

// throws error if something went wrong during the fetch
if (service_error.value?.statusCode) {
  handleFetchError(service, service_error.value.statusCode);
}

// fetches the total number of services (for the group links)
const {
  data: total_services,
  error: total_services_error,
} = await useFetch<number>('/api/service/getTotalNumberOfServices');

// throws error if something went wrong during the fetch
if (total_services_error.value?.statusCode) {
  handleFetchError(total_services, total_services_error.value.statusCode);
}

// fetches the testimonials of the service
const {
  data: testimonials,
  pending: are_testimonials_loading,
  error: testimonials_error,
} = await useLazyFetch<Testimonial[]>('/api/testimonial/getTestimonialsByServiceId', {
  query: {
    service_id: id,
  },
});

// throws error if something went wrong during the fetch
if (testimonials_error.value?.statusCode){
  handleFetchError(testimonials, testimonials_error.value.statusCode);
}

// stores the supervisor id
const supervisorId = computed(() => {
  return service.value?.supervisor_id;
});

// fetches the supervisor information
const {
  data: person,
  pending: is_person_loading,
  error: person_error,
} = await useLazyFetch<Person>('/api/person/getPersonById', {
  query: {
    id: supervisorId,
  },
});

// throws error if something went wrong during the fetch
if (person_error.value?.statusCode) {
  handleFetchError(person, person_error.value.statusCode);
}

// stores the service name
const serviceName = computed(() => {
  return service.value?.name;
});

// sets some HTML tags useful for SEO
useSeoMeta({
  title: 'SheRise | ' + serviceName.value,
  description: 'This is the single service page with all relevant details about a service.',
});

</script>

<template>
  <main>
    <div>
      <h1 class="activity-title">{{ service!.name }}</h1>
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
      <div class="description-container" v-else v-if="service">
        <DescriptionContainer :description="service?.description"/>
      </div>
      <div>
        <ServiceInfoContainer
            :opening_hours="service!.opening_hours"
            :duration="service!.duration ?? undefined"
            :contacts="service!.contacts"
        />
      </div>
    </section>

      <section>
        <div v-if="are_testimonials_loading">
          <Loader/>
        </div>
        <div v-else v-if="testimonials">
          <h2 class="testimonials-header">Learn what our testimonials think about our service</h2>
          <TestimonialsCarousel class="testimonials-carousel" :testimonials="testimonials"/>
        </div>
      </section>

      <section>
        <GroupLinksContainer :id="id.toString()!" :type="'service'" :maxBound="total_services!"/>
      </section>

    </div>
  </main>
</template>

<style scoped>
.service-description-and-service-info-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
}

.description-container{
  max-width: 60%;
  min-width: 20rem;
}

.testimonials-header{
  padding-bottom: 2rem;
  text-align: center;
}

</style>