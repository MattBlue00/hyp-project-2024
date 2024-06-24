<script setup lang="ts">
/**
 * This component is responsible for booting up the web application.
 */

// imports
import { onMounted } from 'vue'

// when mounted, adds some Bootstrap dependencies
onMounted(() => {
  const popperScript = document.createElement('script')
  popperScript.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
  popperScript.integrity = 'sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r'
  popperScript.crossOrigin = 'anonymous'
  popperScript.defer = true
  document.head.appendChild(popperScript)

  const bootstrapScript = document.createElement('script')
  bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js'
  bootstrapScript.integrity = 'sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy'
  bootstrapScript.crossOrigin = 'anonymous'
  bootstrapScript.defer = true
  document.head.appendChild(bootstrapScript)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>