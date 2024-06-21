<template>
   <qrcode-vue :value="value" :level="level" :render-as="renderAs" />
 </template>
 <script setup lang="ts">
   import { ref } from 'vue'
   import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
 
   const value = ref('')
   const level = ref<Level>('H')
   const renderAs = ref<RenderAs>('canvas')
 </script>