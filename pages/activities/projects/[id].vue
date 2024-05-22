<script setup lang="ts">

import type {Project} from '~/types/Project';
import type {Person} from '~/types/Person';
import {handleFetchError} from "~/composables/errorHandlers";
import DescriptionContainer from "~/components/containers/DescriptionContainer.vue";
import PersonCard from "~/components/cards/PersonCard.vue";

useSeoMeta({
  title: 'SheRise | Project',
  description: 'This is the single project page with all relevant details about a project.',
});

const { id } = useRoute().params;

// Computed property per convertire id in numero
const numericId = computed(() => {
  return Number(id);
});

// Computed properties per calcolare prevId e nextId
const prevId = computed(() => {
  return numericId.value - 1;
});

const nextId = computed(() => {
  return numericId.value + 1;
});

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
  // throw error if something went wrong during the fetch
  if (project_error.value?.statusCode) {
    handleFetchError(project, project_error.value.statusCode);
  }
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
  // throw error if something went wrong during the fetch
  if (person_error.value?.statusCode) {
    handleFetchError(person, person_error.value.statusCode);
  }
}

const altPicture = computed(() => {
  return "Picture of the '" + project.value?.name +"' project";
});



// TODO: compute alt supervisor picture

</script>

<template>
  <div v-if="is_project_loading">
    <Loader/>
  </div>
  <div v-else v-if="project">
    <h1 class="project-title">{{ project.name }}</h1>

    <section class="project-img-and-person-card-container">
      <div v-if="is_project_loading">
        <Loader/>
      </div>
      <div v-else v-if="project">
        <nuxt-img class="project-img" :src="project.picture" :alt="altPicture"/>
      </div>
      <div v-if="is_person_loading">
        <Loader/>
      </div>
      <div class="supervisor-container" v-else v-if="person">
        <p class="supervised-by">Supervised By:</p>
        <NuxtLink class="clickable-card" :to="`/persons/${person?.id}`">
          <PersonCard :img="person?.picture" :name="person?.full_name" :main_role="person?.main_role" />
        </NuxtLink>
      </div>
    </section>

    <section>
      <DescriptionContainer :description="project?.description"/>
    </section>

    <section class="group-links">
      <NuxtLink class="prev-link" v-if="numericId > 1" :to="`/activities/projects/${prevId}`">
        <p>PREV</p>
      </NuxtLink>
      <NuxtLink class="next-link" v-if="numericId < 5" :to="`/activities/projects/${nextId}`">
        <p>NEXT</p>
      </NuxtLink>
      <!-- TODO: remove hardcoded max bound -->
    </section>
  </div>
</template>

<style scoped>

.project-title{
  display:flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.project-img-and-person-card-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.project-img{
  display: flex;
  margin-left: 26rem;
  width: 40%;
}

.supervisor-container{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  width: 18rem;
  height: 18.75rem;
  margin-right: 26rem;
  background-color: #FFE4EB;
  padding: 1rem;
}

.supervised-by{
  color: #C30753;
}

.clickable-card{
  box-shadow: 0rem 0rem 0rem #888888;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  text-decoration: none;
}

.group-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.prev-link{
  display: flex;
}

.next-link{
  display: flex;
}

</style>