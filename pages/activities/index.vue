<script setup lang="ts">
import type {Project} from "~/types/Project";
import type {Service} from "~/types/Service";
import ActivitiesCarousel from "~/components/carousels/ActivitiesCarousel.vue";

useSeoMeta({
  title: 'SheRise | All Activities',
  description: 'This is the group page with all the activities carried out at the SheRise center.',
});

const {
  data: projects,
  pending: are_projects_loading,
  error: projects_error
} = await useLazyFetch<Project[]>('/api/project/getAllProjects');
if (projects_error.value?.statusCode){
  handleFetchError(projects, projects_error.value.statusCode);
}

const {
  data: services,
  pending: are_services_loading,
  error: services_error
} = await useLazyFetch<Service[]>('/api/service/getAllServices');
if (services_error.value?.statusCode){
  handleFetchError(services, services_error.value.statusCode);
}
</script>

<template>
  <div class="page-content">
    <section class="page-title-container">
      <p class="orientational-info">Our activities</p>
      <h1 class="page-title">Have a look at what SheRise is all about</h1>
      <p class="p-alt">SheRise's mission is implemented through numerous projects and services. Here, you can learn more about everything we do to make society a better place for everyone.</p>
    </section>
    <section class="activities-content">
      <h2 class="activities-title">
        Our projects
      </h2>
      <div v-if="are_projects_loading">
        <Loader/>
      </div>
      <div v-else v-if="projects">
        <ActivitiesCarousel class="activity-carousel" :activities="projects" type="projects"/>
      </div>
      <h2 class="activities-title">
        Our services
      </h2>
      <div v-if="are_services_loading">
        <Loader/>
      </div>
      <div v-else v-if="services">
        <ActivitiesCarousel class="activity-carousel" :activities="services" type="services"/>
      </div>
    </section>
  </div>
</template>

<style scoped>

.activities-content{
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
}

.activities-title{
  padding-top: 2.5rem;
  align-self: center;
  font-size: 1.5rem;
  color: var(--dark-color);
}

.activity-carousel{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

</style>
