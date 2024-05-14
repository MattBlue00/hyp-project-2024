<script setup lang="ts">
interface Props {
  description?: string;
}

const {description} = defineProps<Props>();
</script>

<template>
  <div id="DescriptionContainer">
    <p class="Description-header">Description:</p>
    <p class="Description-content">{{ description }}</p>
  </div>
</template>

<style scoped>
#DescriptionContainer{
  width: 80%;
  border: solid 1px;
  border-radius: 8px;
  margin-left: 10%;
  padding: 15px;
  background-color: #FFFAF1;
}

.Description-header{
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
}

.Description-content{
  font-family: Futura;
  margin-bottom: 25px;
}
</style>