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
      <nuxt-img class="person-img" :src="img" :alt="altPicture"/>
    </div>
    <div class="text-container">
      <p class="Person-info-content-name">{{ name }}</p>
      <p class="Person-info-content-main_role">{{ main_role }}</p>
      <p class="Person-info-content-motto">"{{ motto }}"</p>
    </div>

    <!--
    <p class="Person-info-header">Name:</p>
    <p class="Person-info-content">{{ name }}</p>
    <p class="Person-info-header">Main role:</p>
    <p class="Person-info-content">{{ main_role }}</p>
    <p class="Person-info-header">Personal motto:</p>
    <p class="Person-info-content">{{ motto }}</p>
    -->
  </div>
</template>

<style scoped>
#PersonInfoContainer{
  display:flex;
  justify-content: center;
  width: 50%;
  /*border: solid 1px;*/
  border-radius: 8px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  background-color: #FFE4EB;
  align-items: center;
}

.image-container{
  margin-right: 20px;
}

.person-img{
  height: 10rem;

}

.Person-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}

.text-container{
  margin-bottom: auto;
  margin-right: auto;
}

.Person-info-content-name{
  font-family: Futura,serif;
  font-size: 2em;
  /*color: #DA0E5F;*/
  color: #C30753;
  margin-bottom: 0;
}

.Person-info-content-main_role{
  font-family: Futura,serif;
  font-size: 1em;
  margin-bottom: 10%;
  color: #400E2A;
}

.Person-info-content-motto{
  font-family: Futura,serif;
  font-size: 0.9em;
  margin-bottom: 5%;
  color: #400E2A;
}
</style>