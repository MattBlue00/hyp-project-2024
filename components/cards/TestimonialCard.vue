<script setup lang="ts">
interface Props {
  img: string;
  name: string;
  statement: string;
  isActive: boolean;
}

const { img, name, statement, isActive} = defineProps<Props>();

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
      <div id="testimonialInfo">
        <p id="testimonialName">{{ name }}</p>
        <div class="overflow-auto">
          <p id="testimonialStatement">{{ statement }}</p>
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

#testimonialInfo {
  padding-left: 1.25rem;
  flex: 3;
}

#testimonialName {
  font-size: 1.5625rem;
}

#testimonialStatement {
  font-size: 1rem;
  font-style: italic;
}

</style>