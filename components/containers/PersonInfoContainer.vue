<script setup lang="ts">
interface Props {
  name?: string;
  main_role?: string;
  motto?: string;
}

const {name, main_role, motto} = defineProps<Props>();
</script>

<template>
  <div id="PersonInfoContainer">
    <p class="Person-info-header">Name:</p>
    <p class="Person-info-content">{{ name }}</p>
    <p class="Person-info-header">Main role:</p>
    <p class="Person-info-content">{{ main_role }}</p>
    <p class="Person-info-header">Personal motto:</p>
    <p class="Person-info-content">{{ motto }}</p>
  </div>
</template>

<style scoped>
#PersonInfoContainer{
  width: 300px;
  border: solid 1px;
  border-radius: 8px;
  margin-left: 10%;
  padding: 15px;
  background-color: #FFFAF1;
}

.Person-info-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}

.Person-info-content{
  font-family: Futura;
  margin-bottom: 25px;
}
</style>