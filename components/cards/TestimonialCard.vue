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
    <table>
      <tr>
        <td class="testimonial-author-picture-container">
          <nuxt-img class="testimonial-image" :src="img" :alt="altPicture"/>
        </td>
        <td id="testimonialInfo">
          <p id="testimonialName">{{ name }}</p>
          <p id="testimonialStatement">{{ statement }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.carousel-item {
  padding-bottom: 30px;
}

.testimonial-author-picture-container
{
  display: flex;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 200px;
}

.testimonial-image
{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

#testimonialInfo {
  padding: 40px 20px 20px 20px;
}

#testimonialName {
  font-size: 25px;
}

#testimonialStatement {
  font-size: 16px;
  font-style: italic;
}
</style>