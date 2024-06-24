<script setup lang="ts">
/**
 * This component describes the container for left and right buttons to navigate in groups of projects, services or
 * team members
 */
import CustomButton from "~/components/buttons/CustomButton.vue";

interface Props {
  id: string; // The identifier of the activity or person
  type: string; // The type of group (person/service/project)
  maxBound: number; // The number of members in a group
}

const { id, type, maxBound} = defineProps<Props>();

/**
 * Computed function to fetch the id of an element of a group
 */
const numericId = computed(() => {
  return Number(id);
});

const minBound = 1; // Minimum bound

/**
 * Computed function to fetch the id of the previous element of the group
 */
const prevId = computed(() => {
  if(numericId.value > minBound) return numericId.value - 1;
  else return maxBound;
});

/**
 * Computed function to fetch the id of the next element of the group
 */
const nextId = computed(() => {
  if(numericId.value < maxBound) return numericId.value + 1;
  else return minBound;
});

/**
 * Computed function to fetch the id of the previous path of element of the group
 */
const prev_path = computed(() => {
  if(type == "person") return `/persons/${prevId.value}`;
  else if(type == "service") return `/activities/services/${prevId.value}`;
  else if(type == "project") return `/activities/projects/${prevId.value}`;
  else return undefined;
});

/**
 * Computed function to fetch the id of the next path of element of the group
 */
const next_path = computed(() => {
  if(type == "person") return `/persons/${nextId.value}`;
  else if(type == "service") return `/activities/services/${nextId.value}`;
  else if(type == "project") return `/activities/projects/${nextId.value}`;
  else return undefined;
});

</script>

<template>
  <div class="group-links">
    <CustomButton class="prev-link" value="Previous" left-icon="ooui:arrow-previous-ltr" :to="prev_path!"/>
    <CustomButton class="next-link" value="Next" right-icon="ooui:arrow-previous-rtl" :to="next_path!"/>
  </div>
</template>

<style scoped>
.group-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0;
}

.prev-link{
  display: flex;
}

.next-link{
  display: flex;
}

</style>