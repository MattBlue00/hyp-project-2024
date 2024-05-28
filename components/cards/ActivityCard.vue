<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
}

const { img, name } = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' activity";
});
</script>

<template>
    <div class="image-container">
      <nuxt-img class="activity-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="activity-name">{{name}}</span>
</template>

<style scoped>

.image-container
{
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1.25rem;
}

.activity-img
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 1.25rem;
}

.activity-name
{
  margin-top: 1rem;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
}
</style>