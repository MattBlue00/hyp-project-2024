<script setup lang="ts">
import type {Person} from "~/types/Person";
import PersonCard from "~/components/cards/PersonCard.vue";

useSeoMeta({
  title: 'SheRise | All Persons',
  description: 'This is the group page with all the persons that work in SheRise center.',
});


const {
  data: persons,
  pending: are_persons_loading,
  error: persons_error
} = await useLazyFetch<Person[]>('/api/person/getAllPersons');
if (persons_error.value?.statusCode){
  handleFetchError(persons, persons_error.value.statusCode);
}
</script>

<template>
  <section class="list-container">
    <div v-if="are_persons_loading">
      <Loader/>
    </div>
    <div class="list" v-else>
      <div v-for="person in persons">
        <PersonCard :img="person?.picture" :name="person?.full_name" :main_role="person?.main_role" />
      </div>
    </div>
  </section>

  <NuxtLink :to="`/persons/1`">TEST</NuxtLink>
</template>

<style scoped>
.list-container {
  margin: 3.5rem auto;
}

.list {
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
}

.list div {
  margin: 0 auto;
}
</style>