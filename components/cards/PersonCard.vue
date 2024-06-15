<script setup lang="ts">
interface Props {
  img: string;
  name: string;
  main_role: string;
}

const { img, name, main_role} = defineProps<Props>();

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