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

  <div class="page-content">
    <section class="page-title-container">
      <p class="orientational-info">The team</p>
      <h1 class="page-title">Meet our collaborative team of great professionals</h1>
      <p>To realize the organization's goal, and in order to reach and help as many women as possible,
        a united group of specialized people is needed. This is accomplished in SheRise. Get to know them one by one.</p>
    </section>

    <NuxtLink :to="`/persons/1`">TEST</NuxtLink>

    <section class="list-container">
      <div v-if="are_persons_loading">
        <Loader/>
      </div>
      <div class="list" v-else>
        <div v-for="person in persons">
          <PersonCard :id="person?.id" :img="person?.picture" :name="person?.full_name" :main_role="person?.main_role" />
        </div>
      </div>
    </section>

    <NuxtLink :to="`/persons/1`">TEST</NuxtLink>
  </div>
</template>

<style scoped>

.page-content {
  width: var(--content-width);
  margin: 2rem auto;
}

.page-title-container {
  width: min(900px, 100%);
}

.page-title {
  font-size: 2rem;
  color: var(--dark-color);
}

.page-title-container * {
  margin: 1rem 0;
}

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