<script setup lang="ts">
/**
 * This component describes the carousels for testimonials about SheRise services
 */
import TestimonialCard from "~/components/slides/TestimonialSlide.vue";
import type {Testimonial} from "~/types/Testimonial";

interface Props {
  testimonials: Testimonial[]; // array of testimonials, comprehends its name, statement, and image link, and also the service ID
}

const { testimonials } = defineProps<Props>();

</script>

<template>
    <div id="testimonialsCarousel" class="carousel slide carousel-colored-container">
      <div class="carousel-indicators">
        <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            type="button"
            data-bs-target="#testimonialsCarousel"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : 'false'"
            :aria-label="'Slide ' + (index + 1)"
        />
      </div>
      <div class="carousel-inner">
        <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :img="testimonial.author_picture"
            :name="testimonial.author_full_name"
            :statement="testimonial.statement"
            :isActive="index===0"
        />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>

<style scoped>

.carousel{
  height: 20rem;
}

@media(max-width: 760px) {

  .carousel{
    height: auto;
  }

  .carousel-inner{
    padding: 2rem 2.25rem 3rem;
  }
}
</style>