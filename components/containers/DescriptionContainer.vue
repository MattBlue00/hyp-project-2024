<script setup lang="ts">
/**
 * This component describes the container for descriptions of the activities.
 */
interface Props {
  description: string; // content of the descriptions
}

const {description} = defineProps<Props>();

</script>

<template>
  <div id="DescriptionContainer">
    <h2 class="Description-header">Description</h2>
    <p class="Description-content">{{ description }}</p>
  </div>
</template>

<style scoped>
#DescriptionContainer{
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: var(--box-light-yellow-color);
}

.Description-header{
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--dark-violet-color);
}

.Description-content{
  margin-bottom: 1rem;
  color: var(--dark-violet-color);
}

</style>