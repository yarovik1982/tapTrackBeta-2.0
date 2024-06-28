<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue'
</script>
<template>
    <form id="addReview" class="w-50" @submit.prevent="addReview">
    <h3 class="form-title text-center py-3">Добавить отзыв</h3>
    <btn-close-layout />
    
  </form>
</template>
<style scoped >

</style>