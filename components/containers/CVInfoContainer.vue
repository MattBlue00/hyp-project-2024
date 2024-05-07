<script setup lang="ts">
interface Props {
  bio?: string;
  education?: string;
  past_experience?: string;
  main_expertise?: string;
}

const { bio, education, past_experience, main_expertise} = defineProps<Props>();
</script>

<template>
  <div id="CVInfoContainer">
    <p class="CV-info-header">Bio:</p>
    <p class="CV-info-content">{{ bio }}</p>
    <p class="CV-info-header">Education:</p>
    <p class="CV-info-content">{{ education }}</p>
    <p class="CV-info-header">Past job experience:</p>
    <p class="CV-info-content">{{ past_experience }}</p>
    <p class="CV-info-header">Main expertise:</p>
    <p class="CV-info-content">{{ main_expertise }}</p>
  </div>
</template>

<style scoped>
#CVInfoContainer{
  width: 80%;
  border: solid 1px;
  border-radius: 8px;
  margin-left: 10%;
  padding: 15px;
  background-color: #FFFAF1;
}

.CV-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}

.CV-info-content{
  font-family: Futura;
  margin-bottom: 25px;
}
</style>