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
    <div class="image-container">
      <nuxt-img class="person-img" :src="img" :alt="altPicture"/>
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
}

.person-name
{
  font-size: 1.5em;
  font-family: Futura,serif;
  color: #C30753;
  margin-top: 1rem;
}

.person-main_role{
  font-family: Futura,serif;
  text-align: center;
  color: #400E2A;
}
</style>