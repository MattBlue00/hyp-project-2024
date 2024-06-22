<script setup lang="ts">
interface Props {
  img: string;
  name: string;
  height?: string;
}

const { img, name, height } = defineProps<Props>();

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
  border: 1px solid var(--dark-color);
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
