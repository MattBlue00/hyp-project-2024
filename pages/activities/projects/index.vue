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
    <div class="activity-list" v-else v-if="projects">
      <div v-for="project in projects">
        <ActivityCard class="clickable-activity" :img="project?.picture" :name="project?.name" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.list-container {
  margin: 3.5rem auto;
}
.list div {
  margin: 0 auto;
}
</style>