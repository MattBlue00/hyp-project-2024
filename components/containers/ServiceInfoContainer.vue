<script setup lang="ts">
interface Props {
  opening_hours: string;
  duration?: string;
  contacts: string;
}

const { opening_hours, duration, contacts} = defineProps<Props>();
</script>

<template>
  <div id="serviceInfoContainer">
    <h2 class="service-info-header">Opening hours</h2>
    <p>{{ opening_hours }}</p>
    <h2 v-if="duration" class="service-info-header">Duration</h2>
    <p v-if="duration">{{ duration }}</p>
    <h2 class="service-info-header">Contacts</h2>
    <p>{{ contacts }}</p>
  </div>
</template>

<style scoped>
.service-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  color: var(--bg-color);
}
#serviceInfoContainer{
  background-color: var(--magenta-color);
  border-radius: 8px;
  width: 20rem;
  padding: 1rem;
  color: var(--bg-color);
}
</style>