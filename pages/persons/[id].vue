<script setup lang="ts">

import type {Person} from '~/types/Person';
import {handleFetchError} from "~/composables/errorHandlers";
import CVInfoContainer from "~/components/containers/CVInfoContainer.vue";
import PersonInfoContainer from "~/components/containers/PersonInfoContainer.vue";

useSeoMeta({
  title: 'SheRise | Person',
  description: 'This is the single person page with all relevant details about a team member.',
});

const { id } = useRoute().params;

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

</script>

<template>
  <div v-if="is_person_loading">
    <!--TODO: <Loader/> -->
  </div>
  <!--
  <div v-else v-if="person">
    <CVInfoContainer
        :bio="person?.bio"
        :education="person?.education"
        :past_experience="person?.past_experience"
        :main_expertise="person?.main_expertise"
    />
  </div>
  -->
  <div>
    <PersonInfoContainer
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
</template>

<style scoped>

</style>