<script setup lang="ts">
import type {Project} from "~/types/Project";
import ActivityCard from "~/components/cards/ActivityCard.vue";
import MainPageInfoContainer from "~/components/containers/MainPageInfoContainer.vue";

useSeoMeta({
  title: 'SheRise | Projects',
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
  <main>
    <MainPageInfoContainer
        orientationalInfo="Our projects"
        pageTitle="Discover how SheRise takes action to prevent women abuse"
        introduction="Helping all women in need is essential to SheRise, but preventing abuse from happening again is equally important. That's why the organization is deeply involved in numerous prevention projects."
    />
    <section class="list-container">
      <div v-if="are_projects_loading">
        <Loader/>
      </div>
      <div class="card-list" v-else v-if="projects">
        <div v-for="project in projects">
          <NuxtLink class="clickable-card" :to="`/activities/projects/${project?.id}`">
            <ActivityCard :img="project?.picture" :name="project?.name" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.list-container {
  margin: 3.5rem auto;
}

.list div {
  margin: 0 auto;
}
</style>