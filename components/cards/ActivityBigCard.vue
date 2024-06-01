<script setup lang="ts">
import ActivityCard from "~/components/cards/ActivityCard.vue";
import CustomButton from "~/components/buttons/CustomButton.vue";

interface Props {
  id?: number;
  img?: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  type?: string;
}

const { id, img, name, description, isActive, type} = defineProps<Props>();

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
          <div class="btn-container">
            <NuxtLink :to="`/activities/${type === 'projects' ? 'projects' : 'services'}/${id}`">
              <CustomButton value="More here" />
            </NuxtLink>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
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
  height: 100%;
  width: 200px;
  padding-right: 20px;
}
</style>