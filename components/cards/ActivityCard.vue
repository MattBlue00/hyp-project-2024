<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
}

const { img, name} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' activity";
});
</script>

<template>
  <div class="activity-card">
    <div class="image-container">
      <nuxt-img class="activity-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="activity-name">{{name}}</span>
  </div>
</template>

<style scoped>
.activity-img
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
.activity-card
{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 20px;
  width: 200px;
  height: 300px;
  background-color: white;
}
.activity-name
{
  font-size: 1.25em;
  font-weight: bold;
}
</style>