<script setup lang="ts">
import TestimonialCard from "~/components/cards/TestimonialCard.vue";
import type {Testimonial} from "~/types/Testimonial";

interface Props {
  testimonials?: Testimonial[];
}

const { testimonials } = defineProps<Props>();
</script>

<template>
  <div id="testimonialsCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :data-target="'#testimonialsCarousel'"
          :data-slide-to="index"
          :class="{ active: index === 0 }"
      ></li>
    </ol>
    <div class="carousel-inner">
      <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          :img="testimonial.author_picture"
          :name="testimonial.author_full_name"
          :statement="testimonial.statement"
          :isActive="index===0"
          :altText="'Slide ' + (index + 1)"
      />
    </div>
    <a class="carousel-control-prev" href="#testimonialsCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#testimonialsCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
#testimonialsCarousel{
  width: 250px;
}
</style>