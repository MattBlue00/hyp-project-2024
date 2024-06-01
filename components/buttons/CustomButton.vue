<script setup lang="ts">

interface Props {
    value: string;
    leftIcon?: string;
    rightIcon?: string;
}

const { value } = defineProps<Props>();

</script>

<template>
  <div>
    <div v-if="leftIcon">
      <button class="btn scheme">
        <Icon class="btn-left-icon" :name="leftIcon"/>
        {{ value }}
      </button>
    </div>
    <div v-else-if="rightIcon">
      <button class="btn scheme">
        {{ value }}
        <Icon class="btn-right-icon" :name="rightIcon"/>
      </button>
    </div>
    <div v-else>
      <button class="btn scheme">{{ value }}</button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  width: 9rem;
}

.scheme {
  background-color: var(--nbar-color);
  color: var(--lighter-color);
  transition: 0.3s all ease-in;
}

.scheme:hover {
  background-color: var(--hover-color);
  color: var(--lighter-color);
  transition: 0.3s all ease-in;
}

.btn-left-icon, .btn-right-icon {
  width: 1.5rem;
  height: auto;
  padding-bottom: 0.1rem;
}

.btn-left-icon {
  padding-right: 0.3rem;
}

.btn-right-icon {
  padding-left: 0.3rem;
}

</style>