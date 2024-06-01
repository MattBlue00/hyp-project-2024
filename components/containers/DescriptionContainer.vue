<script setup lang="ts">
interface Props {
  description?: string;
}

const {description} = defineProps<Props>();
</script>

<template>
  <div id="DescriptionContainer">
    <p class="Description-header">Description</p>
    <p class="Description-content">{{ description }}</p>
  </div>
</template>

<style scoped>
#DescriptionContainer{
  width: 80%;
  border-radius: 1rem;
  margin-left: 10%;
  padding: 1.5rem;
  background-color: #FFFAF1;
}

.Description-header{
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #400E2A;
}

.Description-content{
  margin-bottom: 1rem;
  color: #400E2A;
}

</style>