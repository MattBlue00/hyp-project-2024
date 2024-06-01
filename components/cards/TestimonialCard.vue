<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
  statement?: string;
  isActive?: boolean;
}

const { img, name, statement, isActive} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of" + name;
});
</script>

<template>
  <div :class="['carousel-item', isActive ? 'active' : '']">
    <table class="testimonial">
      <tr>
        <td class="testimonial-author-picture-container">
          <nuxt-img class="testimonial-image" :src="img" :alt="altPicture"/>
        </td>
        <td id="testimonialInfo">
          <p id="testimonialName">{{ name }}</p>
          <div class="overflow-auto">
            <p id="testimonialStatement">{{ statement }}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

.testimonial{
  align-content: center;
}

.testimonial-author-picture-container
{
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
}

#testimonialName {
  font-size: 1.5625rem;
}

#testimonialStatement {
  font-size: 1rem;
  font-style: italic;
}

</style>