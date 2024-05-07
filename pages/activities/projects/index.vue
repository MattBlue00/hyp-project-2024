<script setup lang="ts">
import type {Project} from "~/types/Project";
import ActivityCard from "~/components/cards/ActivityCard.vue";

useSeoMeta({
  title: 'SheRise | Our Projects',
  description: 'This is the group page with all the projects involving SheRise center.',
});


const {
  data: projects,
  pending: are_projects_loading,
  error: projects_error
} = await useLazyFetch<Project[]>('/api/project/getAllProjects');
if (projects_error.value?.statusCode){
  handleFetchError(projects, projects_error.value.statusCode);
}
</script>

<template>
  <section class="list-container">
    <div v-if="are_projects_loading">
      <!--TODO: <Loader/> -->
    </div>
    <div class="list" v-else>
      <div v-for="project in projects">
        <ActivityCard :img="project?.picture" :name="project?.name" />
      </div>
    </div>
  </section>
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