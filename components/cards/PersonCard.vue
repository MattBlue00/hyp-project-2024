<script setup lang="ts">
interface Props {
  id?: number;
  img?: string;
  name?: string;
  main_role?: string;
}

const { id, img, name, main_role} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' person";
});
</script>

<template>
  <NuxtLink class="card" :to="`/persons/${id}`">
    <div class="image-container">
      <nuxt-img class="person-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="person-name">{{name}}</span>
    <span class="person-main_role">{{main_role}}</span>
  </NuxtLink>
</template>

<style scoped>
.image-container
{
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 2px;
  width: 250px;
  height: 250px;
}

.person-img
{
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
}

.card
{
  box-shadow: 0.1rem 0.2rem 0.5rem #888888;
  border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
}

.card:hover {
  box-shadow: 0.1rem 0.5rem 1.2rem #888888;
  transition: 0.3s ease-in all;
}

.person-name
{
  font-size: 2em;
  font-weight: bold;
}

.person-main_role{
  font-family: Futura;
}
</style>