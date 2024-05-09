<script setup lang="ts">
import ActivityCard from "~/components/cards/ActivityCard.vue";

interface Props {
  img?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
}

const { img, name, description, isActive} = defineProps<Props>();
</script>

<template>

  <div :class="['carousel-item', isActive ? 'active' : '']">
    <table>
      <tr>
        <td id="activityCardContainer">
          <ActivityCard :img="img" :name="name"/>
        </td>
        <td>
          <div id="activityDescriptionContainer" class="overflow-auto">
            <p id="activityDescriptionHeader">Description</p>
            <p id="activityDescription">{{ description }}</p>
          </div>
          <div>
            <button class="more-button">More here</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.more-button{
  margin-top: 20px;
}
#activityDescriptionHeader{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}
#activityDescriptionContainer{
  height: 200px;
  padding-bottom: 50px;
}
#activityDescription{
  font-size: 14px;
  font-style: italic;
}
#activityCardContainer{
  padding-right: 20px;
}
</style>