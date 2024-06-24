<script setup lang="ts">
/**
 * This component describes the card of the activities, that is of projects and services,
 * displaying their title and image
 */
interface Props {
  img: string; // The image src
  name: string; // The name of the activity
  height?: string; // The height of the card's container
}

const { img, name, height } = defineProps<Props>();

/**
 * computed function for alt displaying
 */
const altPicture = computed(() => {
  return "Picture of the '" + name + "' activity";
});

</script>

<template>
  <div class="activity-card-container" :style="{ height: height || '21rem' }">
    <div class="image-container">
      <img class="activity-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="activity-name">{{ name }}</span>
  </div>
</template>

<style scoped>

.activity-card-container{
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0;
  border: 1px solid var(--dark-violet-color);
  border-radius: 1rem;
}

.image-container {
  display: flex;
  border-radius: 1rem;
}

.activity-img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.activity-name {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: auto;
}

</style>
