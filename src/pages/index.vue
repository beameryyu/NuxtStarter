<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png"
  >
  <HelloWorld :msg="title" />
</template>

<script setup lang="ts" >
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const title = ref('Vue 3 + Vite + Pinia + TypeScript')
</script>
