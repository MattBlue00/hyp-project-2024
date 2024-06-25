<script setup lang="ts">

/**
 * This page is loaded whenever a wrong or unexpected URL is given.
 */

// imports
import CustomButton from "~/components/buttons/CustomButton.vue";

// sets some HTML tags useful for SEO
useSeoMeta({
  title: 'SheRise | Error',
  description: 'This is the error page that explains what went wrong during the navigation.',
});

// defines the page's props (details about the error)
interface Props {
  error: {
    statusCode: number;
    message: string;
  };
}

// actually defines the props
const { error } = defineProps<Props>();

</script>

<template>
  <NuxtLayout>
    <main>
      <div class="error-container">
        <h1 class="error-title">Oops, something went wrong.</h1>
        <h2 class="error-explanation">The page you are requesting may not exist or may have been removed.</h2>
        <p>Please consider going back to the home page to resume navigation.</p>
        <div class="error-links">
          <CustomButton value="Back to Home Page" width="min(15rem, 100%)" to="/"/>
        </div>
        <h2>Error details</h2>
        <p v-if="error.statusCode === 404">{{ error.message ? error.message : 'Page not found' }}</p>
        <p v-else>Error: {{ error.message }}</p>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
.error-container{
  border-radius: 1rem;
  margin-top : 4rem;
  margin-bottom : 4rem;
  padding: 2rem;
  background-color: var(--box-light-pink-color);
}

.error-links{
  display: flex;
  padding-bottom: 3rem;
}
</style>