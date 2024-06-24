<script setup lang="ts">
/**
 * This component describes the slides of the carousel for the testimonials
 */
interface Props {
  img: string; // The src of the image of the testimonial
  name: string; // The name of the testimonial
  statement: string; // The statement of the testimonial
  isActive: boolean; // The state of the slide: whether it is displayed or not
}

const { img, name, statement, isActive} = defineProps<Props>();

/**
 * Computed function for displaying the alt of the picture
 */
const altPicture = computed(() => {
  return "Picture of" + name;
});
</script>

<template>
  <div :class="['carousel-item', isActive ? 'active' : '']">
    <div class="testimonial">
      <div class="testimonial-author-picture-container">
        <img class="testimonial-image" :src="img" :alt="altPicture"/>
      </div>
      <div class="testimonial-info">
        <h3 class="testimonial-name">{{ name }}</h3>
        <div class="overflow-auto">
          <p class="testimonial-statement">{{ statement }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.testimonial{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

.testimonial-author-picture-container
{
  flex: 1;
  display: flex;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 12.5rem;
}

.testimonial-image
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 1rem;
  width: 100%;
}

.testimonial-info {
  padding-left: 1.25rem;
  flex: 3;
}

.testimonial-name {
  font-size: 1.5625rem;
}

.testimonial-statement {
  font-size: 1rem;
  font-style: italic;
  max-height: 10rem;
}

</style>