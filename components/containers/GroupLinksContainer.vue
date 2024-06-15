<script setup lang="ts">

import CustomButton from "~/components/buttons/CustomButton.vue";

interface Props {
  id: string;
  type: string;
  maxBound: number;
}

const { id, type, maxBound} = defineProps<Props>();

const numericId = computed(() => {
  return Number(id);
});

const minBound = 1;

const prevId = computed(() => {
  if(numericId.value > minBound) return numericId.value - 1;
  else return maxBound;
});

const nextId = computed(() => {
  if(numericId.value < maxBound) return numericId.value + 1;
  else return minBound;
});

const prev_path = computed(() => {
  if(type == "person") return `/persons/${prevId.value}`;
  else if(type == "service") return `/activities/services/${prevId.value}`;
  else if(type == "project") return `/activities/projects/${prevId.value}`;
  else return undefined;
});

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