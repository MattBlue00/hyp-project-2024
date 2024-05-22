<script setup lang="ts">
interface Props {
  opening_hours?: string;
  duration?: string | null;
  contacts?: string;
}

const { opening_hours, duration, contacts} = defineProps<Props>();
</script>

<template>
  <div id="serviceInfoContainer">
    <p class="service-info-header">Opening hours</p>
    <p>{{ opening_hours }}</p>
    <p v-if="duration" class="service-info-header">Duration</p>
    <p v-if="duration">{{ duration }}</p>
    <p class="service-info-header">Contacts</p>
    <p>{{ contacts }}</p>
  </div>
</template>

<style scoped>
.service-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  color: white;
}
#serviceInfoContainer{
  background-color: #DA0E5F;
  border-radius: 8px;
  width: 20rem;
  padding: 1rem;
  margin-right: 6rem;
  color: white;
}
</style>