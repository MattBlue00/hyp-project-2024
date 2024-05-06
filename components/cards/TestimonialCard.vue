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
        <td id="testimonialPicture">
          <nuxt-img class="d-block" :src="img" :alt="altPicture"/>
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
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 30px;
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