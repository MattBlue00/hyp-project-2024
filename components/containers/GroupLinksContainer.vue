<script setup lang="ts">

interface Props {
  id?: string;
  type?: string;
}

const { id, type } = defineProps<Props>();

const numericId = computed(() => {
  return Number(id);
});

const minBound = 1;

//NB: to fix it we can pass max bound as a property (obtaining it from a query count select * )
const maxBound = computed(() => {
  if(type == "person") return 20; //TODO: ABSOLUTELY FIX THIS (no hardcoding ;( )
  else if(type == "service") return 5; //TODO: ABSOLUTELY FIX THIS (no hardcoding ;( )
  else if(type == "project") return 5; //TODO: ABSOLUTELY FIX THIS (no hardcoding ;( )
  else return 1; //TODO: fix this
});

const prevId = computed(() => {
  if(numericId.value > minBound) return numericId.value - 1;
  else return maxBound.value;
});

const nextId = computed(() => {
  if(numericId.value < maxBound.value) return numericId.value + 1;
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
    <NuxtLink class="prev-link" :to="prev_path">
      <p>PREV</p>
    </NuxtLink>
    <NuxtLink class="next-link" :to="next_path">
      <p>NEXT</p>
    </NuxtLink>
  </div>

  <!-- TODO: substitute PREV and NEXT with button component -->

</template>

<style scoped>
.group-links{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
}

.prev-link{
  display: flex;
}

.next-link{
  display: flex;
}

</style>