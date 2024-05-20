<script setup lang="ts">
import type { Project } from "~/types/Project";
import type { Service } from "~/types/Service";
import ActivityBigCard from "~/components/cards/ActivityBigCard.vue";

interface Props {
  activities?: (Project | Service)[];
  type?: string;
}

const { activities, type } = defineProps<Props>();

// allows to generate different ids for project and service carousels
const carouselID = computed(() => {
  return "activitiesCarousel-" + type;
});
</script>


<template>
  <div class="carousel">
    <div :id="carouselID" class="carousel slide">
      <div class="carousel-indicators">
        <button
            v-for="(activity, index) in activities"
            :key="activity.id"
            type="button"
            :data-bs-target="'#'+carouselID"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : 'false'"
            :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <ActivityBigCard
            v-for="(activity, index) in activities"
            :key="activity.id"
            :id="activity.id"
            :img="activity.picture"
            :name="activity.name"
            :description="activity.description"
            :isActive="index===0"
            :type="type"
        />
      </div>
      <button class="carousel-control-prev" type="button" :data-bs-target="'#'+carouselID" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="'#'+carouselID" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel{
  padding-left: 10%;
  padding-right: 10%;
  height: 350px;
}
.carousel-inner{
  padding-left: 7%;
  padding-right: 7%;
}
</style>