<script setup lang="ts">

import type {Project} from '~/types/Project';
import type {Person} from '~/types/Person';
import {handleFetchError, handleMissingDataError} from "~/composables/errorHandlers";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import ActivityImageAndSupervisorCardContainer
  from "~/components/containers/ActivityImageAndSupervisorCardContainer.vue";
import GroupLinksContainer from "~/components/containers/GroupLinksContainer.vue";

useSeoMeta({
  title: 'SheRise | Project',
  description: 'This is the single project page with all relevant details about a project.',
});

const { id } = useRoute().params;

// fetch the project information
const {
  data: project,
  pending: is_project_loading,
  error: project_error,
} = await useLazyFetch<Project>('/api/project/getProjectById', {
  query: {
    id: id,
  },
});

if (project_error.value?.statusCode) {
  handleFetchError(project, project_error.value.statusCode);
}

const supervisorId = computed(() => {
  return project.value?.supervisor_id;
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
  handleFetchError(person, person_error.value.statusCode);
}

</script>

<template>
  <div v-if="is_project_loading">
    <Loader/>
  </div>
  <div v-else v-if="project">
    <h1 class="project-title">{{ project.name }}</h1>

    <section>
      <div v-if="is_project_loading || is_person_loading">
        <Loader/>
      </div>
      <ActivityImageAndSupervisorCardContainer v-else v-if="project && person" :activity="project" :supervisor="person" />
    </section>

    <section>
      <DescriptionContainer :description="project?.description"/>
    </section>

    <section>
      <GroupLinksContainer :id="useRoute().params.id" :type="'project'"/>
    </section>

  </div>
</template>

<style scoped>

.project-title{
  display:flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

</style>