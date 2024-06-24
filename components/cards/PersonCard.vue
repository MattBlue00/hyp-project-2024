<script setup lang="ts">
/**
 * This component describes the card of the team components, displaying an image, their name and their role
 */
interface Props {
  img: string; // The src of the person's image
  name: string; // The name of the person
  main_role: string; // The main role of the person
}

const { img, name, main_role} = defineProps<Props>();

/**
 * computed function for alt displaying
 */
const altPicture = computed(() => {
  return "Picture of " + name;
});
</script>

<template>
    <div class="image-container">
      <img class="person-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="person-name">{{name}}</span>
    <span class="person-main_role">{{main_role}}</span>
</template>

<style scoped>

.image-container
{
  display: flex;
  align-items: center;
  align-content: center;
  border-radius: 1.25rem;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.person-img
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 1.25rem;
  filter: drop-shadow(0.25rem 0 0.5rem #291c1d);
}

.person-name
{
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
}

.person-main_role{
  text-align: center;
}

</style>