<script setup lang="ts">
import CustomButton from "~/components/buttons/CustomButton.vue";

interface Props {
  error: {
    statusCode: number;
    message: string;
  };
}

const { error } = defineProps<Props>();
</script>

<template>
  <NuxtLayout>
    <div class="error-container">
      <h1 class="error-title">Oops, something went wrong.</h1>
      <h2 class="error-explanation">The page you are requesting may not exist or may have been removed.</h2>
      <p>Please consider going back to the home page to resume navigation.</p>
      <div class="error-links">
        <CustomButton value="Back to Home Page" width="15rem" to="/"/>
      </div>
      <h2>Error details</h2>
      <p v-if="error.statusCode === 404">{{ error.message ? error.message : 'Page not found' }}</p>
      <p v-else>Error: {{ error.message }}</p>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error-container{
  border-radius: 1rem;
  margin: 4rem;
  padding: 2rem;
  background-color: var(--lighter-color);
}

.error-links{
  padding-bottom: 3rem;
}
</style>