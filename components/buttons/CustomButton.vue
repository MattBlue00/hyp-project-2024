<script setup lang="ts">
/**
 * This component describes a customized button, which will be used in the majority of pages of our website.
 * There are three possibilities: the left and right button are used for navigating across projects, services and team
 * members, while the standard button is general purpose.
 */
interface Props {
    value: string; // The label of the button
    to: string; // The destination onClick of the button
    leftIcon?: string; // An optional left icon
    rightIcon?: string; // An optional right icon
    width?: string; // The width of the button
}

const { value } = defineProps<Props>();

</script>

<template>
  <NuxtLink :to="to">
    <div v-if="leftIcon">
    <button class="btn scheme" :style="{ width: width || '9rem' }">
      <Icon class="btn-left-icon" :name="leftIcon"/>
        {{ value }}
      </button>
    </div>
    <div v-else-if="rightIcon">
      <button class="btn scheme" :style="{ width: width || '9rem' }">
        {{ value }}
        <Icon class="btn-right-icon" :name="rightIcon"/>
      </button>
    </div>
    <div v-else>
      <button class="btn scheme" :style="{ width: width || '9rem' }">{{ value }}</button>
    </div>
  </NuxtLink>
</template>

<style scoped>

/* CSS for general button */

.btn {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  align-content: center;
}

.scheme {
  background-color: var(--magenta-color);
  color: var(--bg-color);
  transition: 0.3s all ease-in;
}

.scheme:hover {
  background-color: var(--hover-color);
  color: var(--bg-color);
  transition: 0.3s all ease-in;
}

/* CSS for left and right button */

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