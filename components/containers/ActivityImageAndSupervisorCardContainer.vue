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
  return "Picture of the '" + activity?.value?.name +"' activity"; //TODO: check this
});

</script>

<template>
  <div class="activity-image-and-supervisor-card-container">
    <div class="activity-img-container">
      <nuxt-img class="activity-img" :src="activity.picture" :alt="altPicture"/>
    </div>
    <div class="supervisor-container">
      <p class="supervised-by">Supervised By:</p>
      <NuxtLink class="clickable-card" :to="`/persons/${supervisor?.id}`">
        <PersonCard
            :img="supervisor.picture"
            :name="supervisor.full_name"
            :main_role="supervisor.main_role"
        />
      </NuxtLink>
    </div>
  </div>

</template>

<style scoped>
.activity-image-and-supervisor-card-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.activity-img{
  display: flex;
  margin-left: 20rem;
  width: 25rem;
  height: 25rem;
}

.supervisor-container{
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  width: 20rem;
  height: 25rem;
  margin-right: 20rem;
  background-color: #FFE4EB;
  padding: 1rem;
}

.supervised-by{
  color: #C30753;
}

.clickable-card{
  box-shadow: 0rem 0rem 0rem #888888;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  text-decoration: none;
}
</style>