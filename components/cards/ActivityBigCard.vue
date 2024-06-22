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
    <div id="mainContent">
      <div id="activityCardContainer">
        <ActivityCard :img="img" :name="name" height="auto"/>
      </div>
      <div id="activityDescriptionPlusButtonContainer">
        <div id="activityDescriptionContainer">
          <p id="activityDescriptionHeader">Description</p>
          <div class="overflow-auto">
            <p id="activityDescription">{{ description }}</p>
          </div>
        </div>
        <div class="btn-container">
          <CustomButton class="more-link" value="More here" :to="`/activities/${type === 'projects' ? 'projects' : 'services'}/${id}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

#mainContent{
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
}

#activityDescriptionPlusButtonContainer{
  flex: 3;
}

#activityCardContainer{
  flex: 1;
}

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

.more-link{
  display: inline-block;
  margin-bottom: 1rem;
}

@media(width < 760px){
  #activityDescriptionContainer{
    display: none;
  }
  #mainContent{
    flex-direction: column;
  }
}

</style>
