<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
}

const { img, name, description, isActive} = defineProps<Props>();

const altPicture = computed(() => {
  return "Picture of the '" + name +"' activity";
});
</script>

<template>

  <div :class="['carousel-item', isActive ? 'active' : '']">
    <table>
      <tr>
        <td id="activityCard">
          <!-- TODO: activity card -->
        </td>
        <td id="activityDescriptionContainer">
          <p id="activityDescription">{{ description }}</p>
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
#activityDescription{
  font-size: 14px;
  font-style: italic;
}
</style>