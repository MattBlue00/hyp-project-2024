<script setup lang="ts">

import type {Person} from '~/types/Person';
import {handleFetchError} from "~/composables/errorHandlers";
import CVInfoContainer from "~/components/containers/CVInfoContainer.vue";
import PersonInfoContainer from "~/components/containers/PersonInfoContainer.vue";
import type {Project} from "~/types/Project";
import ActivityCard from "~/components/cards/ActivityCard.vue";
import type {Service} from "~/types/Service";

useSeoMeta({
  title: 'SheRise | Person',
  description: 'This is the single person page with all relevant details about a team member.',
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


// fetch the person information
const {
  data: person,
  pending: is_person_loading,
  error: person_error,
} = await useLazyFetch<Person>('/api/person/getPersonById', {
  query: {
    id: id,
  },
});
if (person_error.value?.statusCode) {
  // throw error if something went wrong during the fetch
  if (person_error.value?.statusCode) {
    handleFetchError(person, person_error.value.statusCode);
  }
}

// TODO: compute alt person picture


const {
  data: related_projects,
  pending: are_projects_loading,
  error: projects_error
} = await useLazyFetch<Project[]>('/api/project/getRelatedProjects', {
  query: {
    id: id,
  },
});
if (projects_error.value?.statusCode){
  handleFetchError(related_projects, projects_error.value.statusCode);
}


const {
  data: related_services,
  pending: are_services_loading,
  error: services_error
} = await useLazyFetch<Service[]>('/api/service/getRelatedServices', {
  query: {
    id: id,
  },
});
if (services_error.value?.statusCode){
  handleFetchError(related_services, services_error.value.statusCode);
}

</script>

<template>
  <section>
    <div v-if="is_person_loading">
      <Loader/>
    </div>
    <div v-else v-if="person">
      <PersonInfoContainer
          :img="person?.picture"
          :name="person?.full_name"
          :main_role="person?.main_role"
          :motto="person?.motto"
      />
    </div>
    <div>
      <CVInfoContainer
          :bio="person?.bio"
          :education="person?.education"
          :past_experience="person?.past_experience"
          :main_expertise="person?.main_expertise"
      />
    </div>
  </section>

  <section class="list-container">
    <div v-if="related_projects.length > 0">
      <p class="related-projects-title">Related Projects</p>
    </div>
    <div v-if="are_projects_loading">
      <Loader/>
    </div>
    <div class="card-list" v-else v-if="related_projects">
      <div v-for="project in related_projects">
        <NuxtLink class="clickable-card" :to="`/activities/projects/${project?.id}`">
          <ActivityCard :img="project?.picture" :name="project?.name" />
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="list-container">
    <div v-if="related_services.length > 0">
      <p class="related-services-title">Related Services</p>
    </div>
    <div v-if="are_services_loading">
      <Loader/>
    </div>
    <div class="card-list" v-else v-if="related_services">
      <div v-for="service in related_services">
        <NuxtLink class="clickable-card" :to="`/activities/services/${service?.id}`">
          <ActivityCard :img="service?.picture" :name="service?.name" />
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="group-links">
    <NuxtLink class="prev-link" v-if="numericId > 1" :to="`/persons/${prevId}`">
      <p>PREV</p>
    </NuxtLink>
    <NuxtLink class="next-link" v-if="numericId < 20" :to="`/persons/${nextId}`">
      <p>NEXT</p>
    </NuxtLink>
  </section>
  <!-- TODO: remove hardcoded max bound -->
</template>

<style scoped>
.related-projects-title{
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #400E2A;
}

.related-services-title{
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #400E2A;
}

.list-container{
  margin-left: 5rem;
  margin-right: 5rem;
}

.group-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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