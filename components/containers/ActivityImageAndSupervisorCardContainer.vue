<script setup lang="ts">
import type {Project} from "~/types/Project";
import type {Service} from "~/types/Service";
import type {Person} from "~/types/Person";
import PersonCard from "~/components/cards/PersonCard.vue";

interface Props {
  activity?: (Project | Service);
  supervisor?: Person;
}

const { activity, supervisor} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + activity?.name +"' activity";
});

</script>

<template>
  <div class="activity-image-and-supervisor-card-container">
    <div class="activity-img-container">
      <img class="activity-img" :src="activity!.picture" :alt="altPicture"/>
    </div>
    <div class="supervisor-container">
      <p class="supervised-by">Supervised by</p>
      <NuxtLink class="clickable-card person-card" :to="`/persons/${supervisor?.id}`">
        <PersonCard
            :img="supervisor!.picture"
            :name="supervisor!.full_name"
            :main_role="supervisor!.main_role"
        />
      </NuxtLink>
    </div>
  </div>

</template>

<style scoped>
.activity-image-and-supervisor-card-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
  border: 0.1rem solid var(--dark-color);
  border-radius: 1rem;
}

.activity-img{
  display: flex;
  width: 25rem;
  height: 25rem;
  border-radius: 1rem;
  margin: 1.25rem;
}

.supervisor-container{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  width: 20rem;
  height: 25rem;
  background-color: var(--bg-color);
  padding: 1rem;
  border-radius: 0 1rem 1rem 0;
}

.supervised-by{
  color: var(--dark-color);
}

.clickable-card{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  text-decoration: none;
  width: 15rem;
}

</style>