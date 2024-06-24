<script setup lang="ts">

/**
 * This group page contains all the projects and services available at SheRise in the form of informative slides
 * that can be scrolled thanks to carousels.
 */

// imports
import type {Project} from "~/types/Project";
import type {Service} from "~/types/Service";
import ActivitiesCarousel from "~/components/carousels/ActivitiesCarousel.vue";
import MainPageInfoContainer from "~/components/containers/MainPageInfoContainer.vue";

// sets some HTML tags useful for SEO
useSeoMeta({
  title: 'SheRise | Activities',
  description: 'This is the group page with all the activities carried out at the SheRise center.',
});

// fetches the projects to build the slides
const {
  data: projects,
  pending: are_projects_loading,
  error: projects_error
} = await useLazyFetch<Project[]>('/api/project/getAllProjects');

// throws error if something went wrong while fetching
if (projects_error.value?.statusCode){
  handleFetchError(projects, projects_error.value.statusCode);
}

// fetches the services to build the slides
const {
  data: services,
  pending: are_services_loading,
  error: services_error
} = await useLazyFetch<Service[]>('/api/service/getAllServices');

// throws error if something went wrong while fetching
if (services_error.value?.statusCode){
  handleFetchError(services, services_error.value.statusCode);
}

</script>

<template>
  <main>

    <MainPageInfoContainer
        orientationalInfo="Our activities"
        pageTitle="Have a look at what SheRise is all about"
        introduction="SheRise's mission is implemented through numerous projects and services. Here, you can learn more about everything we do to make society a better place for everyone."
    />

    <section class="activities-content">

      <!-- Projects carousel -->
      <h2 class="activities-title">
        Our projects
      </h2>
      <div v-if="are_projects_loading">
        <Loader/>
      </div>
      <div v-else v-if="projects">
        <ActivitiesCarousel class="activity-carousel" :activities="projects" type="projects"/>
      </div>

      <!-- Services carousel -->
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
  </main>
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
  color: var(--dark-violet-color);
}

.activity-carousel{
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

</style>
