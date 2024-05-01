<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { RouterLink, RouterView } from 'vue-router'
// import { useSetPosition } from './stores/setPosition';
// import { storeToRefs } from 'pinia';


// const setPos = useSetPosition()
// const {pos} = storeToRefs(setPos)

// console.log(pos.value);
</script>

<template>
  <AppHeader></AppHeader>
  
  <RouterView />
</template>

<style scoped>

</style>
