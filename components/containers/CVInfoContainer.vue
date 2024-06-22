<script setup lang="ts">
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
  background-color: #FFFAF1;
}

.CV-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #400E2A;
}

.CV-info-content{
  color: #400E2A;
}
</style>