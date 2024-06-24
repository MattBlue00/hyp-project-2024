<script setup lang="ts">
/**
 * This component describes the slides of the carousel for activities
 */
import ActivityCard from "~/components/cards/ActivityCard.vue";
import CustomButton from "~/components/buttons/CustomButton.vue";

interface Props {
  id: number; // The ID of the activity, bounded to its type
  img: string; // The src of the image of the activity
  name: string; // The name of the activity
  description: string; // The description of the activity
  isActive: boolean; // The state of the slide: whether it is displayed or not
  type: string; // The type of the activity: project or service
}

const { id, img, name, description, isActive, type} = defineProps<Props>();

</script>

<template>

  <div :class="['carousel-item', isActive ? 'active' : '']">
    <div class="main-content">
      <div class="activity-big-card-container">
        <ActivityCard :img="img" :name="name" height="18rem"/>
      </div>
      <div class="activity-description-plus-button-container">
        <div class="activity-description-container">
          <h3 class="activity-description-header">Description</h3>
          <div class="overflow-auto">
            <p class="activity-description">{{ description }}</p>
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

.main-content{
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
}

.activity-big-card-container{
  flex: 1;
}

.activity-description-plus-button-container{
  flex: 3;
}

.activity-description-header{
  font-size: 1.375rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
}

.activity-description{
  max-height: 10rem;
  font-size: 0.875rem;
  font-style: italic;
}

.activity-description-plus-button-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn-container{
  padding-top: 1rem;
  text-align: left;
}

@media(max-width: 760px){

  .main-content{
    flex-direction: column;
  }

  .activity-big-card-container{
    width: 10rem;
    align-self: center;
  }

  .activity-description-plus-button-container{
    flex: 1;
  }

  .activity-description{
    max-height: 5rem;
  }

  .btn-container{
    text-align: center;
  }

}

</style>
