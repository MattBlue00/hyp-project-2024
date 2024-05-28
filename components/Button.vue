<script setup lang="ts">

interface Props {
    value: string;
}

const { value } = defineProps<Props>();

</script>

<template>
    <div>
        <button class="btn scheme">{{ value }}</button>
    </div>
</template>

<style scoped>
.btn {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 20px;
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
</style>