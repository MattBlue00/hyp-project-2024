<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
  main_role?: string;
}

const { img, name, main_role} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' person";
});
</script>

<template>
  <div class="card">
    <div class="image-container">
      <nuxt-img class="person-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="person-name">{{name}}</span>
    <span class="person-main_role">{{main_role}}</span>

  </div>
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
  display: flex;
  flex-flow: column;
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  width: fit-content;
  height: fit-content;
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