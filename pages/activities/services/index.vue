<script setup lang="ts">
import type {Service} from "~/types/Service";
import ActivityCard from "~/components/cards/ActivityCard.vue";

useSeoMeta({
  title: 'SheRise | All Services',
  description: 'This is the group page with all the services delivered by SheRise center.',
});


const {
  data: services,
  pending: are_services_loading,
  error: services_error
} = await useLazyFetch<Service[]>('/api/service/getServices');
if (services_error.value?.statusCode){
  handleFetchError(services, services_error.value.statusCode);
}
</script>

<template>
  Services<br>
  <NuxtLink :to="`/activities/services/1`">TEST</NuxtLink>

  <section class="list-container">
    <div v-if="are_services_loading">
      <Loader/>
    </div>
    <div class="activity-list" v-else v-if="services">
      <div v-for="service in services">
        <ActivityCard class="clickable-activity" :img="service?.picture" :name="service?.name" />
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