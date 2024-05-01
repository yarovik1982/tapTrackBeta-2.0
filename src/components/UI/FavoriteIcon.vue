<script setup>
import { ref } from 'vue';
const isFavorite = ref(false)
const setFavorited = () => {
   isFavorite.value = !isFavorite.value
}
</script>
<template>
  <div @click="setFavorited()">
    <i class="bi text-warning" :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'" style="cursor: pointer;"></i>
  </div>
</template>
<style scoped>

</style>
