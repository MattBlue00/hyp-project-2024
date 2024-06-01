<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
  height?: string;
}

const { img, name, height } = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' activity";
});
</script>

<template>
  <div class="activity-card-container" :style="{ height: height || '20rem' }">
    <div class="image-container">
      <nuxt-img class="activity-img" :src="img" :alt="altPicture"/>
    </div>
    <span class="activity-name">{{ name }}</span>
  </div>
</template>

<style scoped>
.activity-card-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--dark-color);
  border-radius: 1rem;
}

.image-container {
  display: flex;
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 1rem;
}

.activity-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.activity-name {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
