<script setup lang="ts">
import type { Person } from "~/types/Person";
import PersonCard from "~/components/cards/PersonCard.vue";
import MainPageInfoContainer from "~/components/containers/MainPageInfoContainer.vue";

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
  <main>
    <MainPageInfoContainer
        h2Content="The team"
        h1Content="Meet our collaborative team of great professionals"
        h3Content="To achieve the organization's goals and reach as many women as possible, a united team of specialists is essential. This is the core of SheRise. Get to know them one by one."
    />
    <section class="list-container">
      <div v-if="are_persons_loading">
        <Loader/>
      </div>
      <div class="card-list" v-else>
        <div v-for="person in persons">
          <NuxtLink class="clickable-card person-card" :to="`/persons/${person?.id}`">
            <PersonCard :img="person?.picture" :name="person?.full_name" :main_role="person?.main_role" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

.list-container{
  padding-bottom: 5rem;
  padding-top: 3rem;
}

</style>