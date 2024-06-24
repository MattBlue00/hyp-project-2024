<script setup lang="ts">
/**
 * This component describes the container of the main information of a team member, including their name, main role,
 * their motto and an image.
 */
interface Props {
  img: string; // The image src of the person
  name: string; // The name of the person
  main_role: string; // The main role of the person
  motto: string; // The motto of the person
}

const {img, name, main_role, motto} = defineProps<Props>();

/**
 * Computed function to display the alt
 */
const altPicture = computed(() => {
  return "Picture of the '" + name +"' person";
});

</script>

<template>
  <div id="PersonInfoContainer">
    <div class="image-container">
      <img class="person-img" :src="img" :alt="altPicture"/>
    </div>
    <div class="text-container">
      <h1 class="Person-info-content-name">{{ name }}</h1>
      <h2 class="Person-info-content-main_role">{{ main_role }}</h2>
      <h3 class="Person-info-content-motto">"{{ motto }}"</h3>
    </div>
  </div>
</template>

<style scoped>
#PersonInfoContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  border-radius: 1rem;
  margin: 5% auto;
  padding: 1rem;
  background-color: var(--box-light-pink-color);
  align-items: center;
}

.image-container{
  align-content: center;
}

.person-img{
  height: 20rem;
  border-radius: 1rem;
}

.text-container{
  text-align: center;
}

.Person-info-content-name{
  font-size: 3rem;
  color: var(--hover-color);
  margin-top: 2rem;
  margin-bottom: 0;
}

.Person-info-content-main_role{
  font-size: 1.5em;
  margin-bottom: 2rem;
  color: var(--dark-violet-color);
}

.Person-info-content-motto{
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 2rem;
  color: var(--dark-violet-color);
}

@media (width < 540px) {
  .person-img{
    height: 15rem;
  }
}

@media (width < 400px) {
  .person-img{
    height: 10rem;
  }
}

</style>