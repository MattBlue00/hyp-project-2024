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
} = await useLazyFetch<Project[]>('/api/project/getProjects');
if (projects_error.value?.statusCode){
  handleFetchError(projects, projects_error.value.statusCode);
}

const {
  data: services,
  pending: are_services_loading,
  error: services_error
} = await useLazyFetch<Service[]>('/api/service/getServices');
if (services_error.value?.statusCode){
  handleFetchError(services, services_error.value.statusCode);
}
</script>

<template>
  <div v-if="are_projects_loading">
    <!--TODO: <Loader/> -->
  </div>
  <div v-else v-if="projects">
    <ActivitiesCarousel :activities="projects"/>
  </div>
  <div v-if="are_services_loading">
    <!--TODO: <Loader/> -->
  </div>
  <div v-else v-if="services">
    <ActivitiesCarousel :activities="services"/>
  </div>
</template>

<style scoped>

</style>