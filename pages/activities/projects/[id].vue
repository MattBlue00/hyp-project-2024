<script setup lang="ts">

/**
 * This kind-of-topic page contains all the details about a project with a given id.
 */

// imports
import type {Project} from '~/types/Project';
import type {Person} from '~/types/Person';
import {handleFetchError} from "~/composables/errorHandlers";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import ActivityImageAndSupervisorCardContainer
  from "~/components/containers/ActivityImageAndSupervisorCardContainer.vue";
import GroupLinksContainer from "~/components/containers/GroupLinksContainer.vue";

// gets the id of the project from the URL
const { id } = useRoute().params;

// fetches the project details
const {
  data: project,
  pending: is_project_loading,
  error: project_error,
} = await useFetch<Project>('/api/project/getProjectById', {
  query: {
    id: id,
  },
});

// throws error if something went wrong during the fetch
if (project_error.value?.statusCode) {
  handleFetchError(project, project_error.value.statusCode);
}

// fetches the total number of projects (for the group links)
const {
  data: total_projects,
  error: total_projects_error,
} = await useFetch<number>('/api/project/getTotalNumberOfProjects');

// throws error if something went wrong during the fetch
if (total_projects_error.value?.statusCode) {
  handleFetchError(total_projects, total_projects_error.value.statusCode);
}

// stores the supervisor id
const supervisorId = computed(() => {
  return project.value?.supervisor_id;
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

// stores the project name
const projectName = computed(() => {
  return project.value?.name;
});

// sets some HTML tags useful for SEO
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

      <!-- Project title, image, and supervisor -->
      <h1 class="activity-title">{{ project?.name }}</h1>
      <section>
        <div v-if="is_project_loading || is_person_loading">
          <Loader/>
        </div>
        <ActivityImageAndSupervisorCardContainer v-else v-if="project && person" :activity="project" :supervisor="person" />
      </section>

      <!-- Project description -->
      <section class="description-container">
        <DescriptionContainer :description="project?.description"/>
      </section>

      <!-- Project group links -->
      <section>
        <GroupLinksContainer :id="id.at(0)!" :type="'project'" :maxBound="total_projects!"/>
      </section>

    </div>
  </main>
</template>

<style scoped>

.description-container{
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

</style>