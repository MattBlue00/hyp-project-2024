<script setup lang="ts">

import type {Service} from '~/types/Service';
import {handleFetchError} from "~/composables/errorHandlers";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";

useSeoMeta({
  title: 'SheRise | Project',
  description: 'This is the single project page with all relevant details about a project.',
});

const { id } = useRoute().params;

// fetch the service information
const {
  data: project,
  pending: is_project_loading,
  error: project_error,
} = await useLazyFetch<Service>('/api/project/getProjectById', {
  query: {
    id: id,
  },
});
if (project_error.value?.statusCode) {
  // throw error if something went wrong during the fetch
  if (project_error.value?.statusCode) {
    handleFetchError(project, project_error.value.statusCode);
  }
}

// TODO: compute alt service picture

</script>

<template>
  <div v-if="is_project_loading">
    <!--TODO: <Loader/> -->
  </div>
  <div v-else v-if="project">
    <h1 class="project-title">{{ project.name }}</h1>
    <DescriptionContainer :description="project?.description"/>
  </div>
</template>

<style scoped>

</style>