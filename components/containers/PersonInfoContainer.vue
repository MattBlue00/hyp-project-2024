<script setup lang="ts">
interface Props {
  img?: string;
  name?: string;
  main_role?: string;
  motto?: string;
}

const {img, name, main_role, motto} = defineProps<Props>();

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
      <p class="Person-info-content-name">{{ name }}</p>
      <p class="Person-info-content-main_role">{{ main_role }}</p>
      <p class="Person-info-content-motto">"{{ motto }}"</p>
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
  background-color: #FFE4EB;
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
  color: #C30753;
  margin-top: 2rem;
  margin-bottom: 0;
}

.Person-info-content-main_role{
  font-size: 1.5em;
  margin-bottom: 2rem;
  color: #400E2A;
}

.Person-info-content-motto{
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 2rem;
  color: #400E2A;
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