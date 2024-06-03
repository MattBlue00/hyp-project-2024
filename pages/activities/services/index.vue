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
} = await useLazyFetch<Service[]>('/api/service/getAllServices');
if (services_error.value?.statusCode){
  handleFetchError(services, services_error.value.statusCode);
}
</script>

<template>

  <div class="page-content">
    <section class="page-title-container">
      <p class="orientational-info">Our services</p>
      <h1 class="page-title">Learn how SheRise takes care about women in difficulty</h1>
      <p class="p-alt">SheRises offers many services to help abused women. Every woman will learn how to rise again with SheRise.</p>
    </section>
    <section class="list-container">
      <div v-if="are_services_loading">
        <Loader/>
      </div>
      <div class="card-list" v-else v-if="services">
        <div v-for="service in services">
          <NuxtLink class="clickable-card" :to="`/activities/services/${service?.id}`">
            <ActivityCard :img="service?.picture" :name="service?.name"/>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.list-container {
  margin: 3.5rem auto;
}

.list div {
  margin: 0 auto;
}
</style>