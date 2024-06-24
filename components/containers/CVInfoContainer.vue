<script setup lang="ts">
/**
 * This component describes the container for the CV of team members, containing their bio, their education, their past
 * working experiences and their main expertise domain.
 */
interface Props {
  bio: string;
  education: string;
  past_experience: string;
  main_expertise: string;
}

const { bio, education, past_experience, main_expertise} = defineProps<Props>();
</script>

<template>
  <div id="CVInfoContainer">
    <h2 class="CV-info-header">Bio</h2>
    <p class="CV-info-content">{{ bio }}</p>
    <h2 class="CV-info-header">Education</h2>
    <p class="CV-info-content">{{ education }}</p>
    <h2 class="CV-info-header">Past job experience</h2>
    <p class="CV-info-content">{{ past_experience }}</p>
    <h2 class="CV-info-header">Main expertise</h2>
    <p class="CV-info-content">{{ main_expertise }}</p>
  </div>
</template>

<style scoped>

#CVInfoContainer{
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background-color: var(--box-light-yellow-color);
}

.CV-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: var(--dark-violet-color);
}

.CV-info-content{
  color: var(--dark-violet-color);
}

</style>