<script setup lang="ts">
import { useCountStore } from '@/stores'
const countStore = useCountStore()

defineProps({
  msg: { type: String, required: true }
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>
  <p>
    <a
      href="https://v3.nuxtjs.org/"
      target="_blank"
    >
      Nuxt3 Documentation
    </a>
    |
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Documentation
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Documentation</a>
    |
    <a
      href="https://pinia.vuejs.org/"
      target="_blank"
    >Pinia Documentation</a>
  </p>

  <button
    type="button"
    @click="countStore.count++"
  >
    count is: {{ countStore.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
