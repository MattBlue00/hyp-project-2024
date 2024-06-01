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
          <ActivityCard :img="img" :name="name" height="16rem"/>
        </td>
        <td>
          <div id="activityDescriptionContainer">
            <p id="activityDescriptionHeader">Description</p>
            <div class="overflow-auto">
              <p id="activityDescription">{{ description }}</p>
            </div>
          </div>
          <div class="btn-container">
            <CustomButton class="more-link" value="More here" :to="`/activities/${type === 'projects' ? 'projects' : 'services'}/${id}`" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

#activityDescriptionHeader{
  font-size: 1.375rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
}

#activityDescriptionContainer{
  height: 12.5rem;
  padding-bottom: 3.125rem;
}

#activityDescription{
  height: 8.125rem;
  font-size: 0.875rem;
  font-style: italic;
}

#activityCardContainer{
  height: 100%;
  width: 12.5rem;
  padding-right: 1.25rem;
}

.more-link{
  display: inline-block;
}

</style>
