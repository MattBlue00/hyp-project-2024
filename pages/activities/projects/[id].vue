<script setup lang="ts">

import type {Project} from '~/types/Project';
import type {Person} from '~/types/Person';
import {handleFetchError} from "~/composables/errorHandlers";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import ActivityImageAndSupervisorCardContainer
  from "~/components/containers/ActivityImageAndSupervisorCardContainer.vue";
import GroupLinksContainer from "~/components/containers/GroupLinksContainer.vue";

const { id } = useRoute().params;

// fetch the project information
const {
  data: project,
  pending: is_project_loading,
  error: project_error,
} = await useFetch<Project>('/api/project/getProjectById', {
  query: {
    id: id,
  },
});
// throw error if something went wrong during the fetch
if (project_error.value?.statusCode) {
  handleFetchError(project, project_error.value.statusCode);
}

// fetch the total number of projects
const {
  data: total_projects,
  error: total_projects_error,
} = await useFetch<number>('/api/project/getTotalNumberOfProjects');
// throw error if something went wrong during the fetch
if (total_projects_error.value?.statusCode) {
  handleFetchError(total_projects, total_projects_error.value.statusCode);
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
// throw error if something went wrong during the fetch
if (person_error.value?.statusCode) {
  handleFetchError(person, person_error.value.statusCode);
}

const projectName = computed(() => {
  return project.value?.name;
});

useSeoMeta({
  title: 'SheRise | ' + projectName.value,
  description: 'This is the single project page with all relevant details about a project.',
});

</script>

<template>
  <main>
    <div v-if="is_project_loading">
      <Loader/>
    </div>
    <div v-else v-if="project">
      <h1 class="project-title">{{ project?.name }}</h1>

      <section>
        <div v-if="is_project_loading || is_person_loading">
          <Loader/>
        </div>
        <ActivityImageAndSupervisorCardContainer v-else v-if="project && person" :activity="project" :supervisor="person" />
      </section>

    <section class="description-container">
      <DescriptionContainer :description="project?.description"/>
    </section>

    <section>
      <GroupLinksContainer :id="id.at(0)" :type="'project'" :maxBound="total_projects!"/>
    </section>

    </div>
  </main>
</template>

<style scoped>

.project-title{
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.description-container{
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

</style>