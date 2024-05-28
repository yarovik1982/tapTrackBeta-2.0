<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue'
import StarRating from '@/components/StarRating.vue';
</script>
<template>
  <form id="createFeedback">
    <h3 class="form-title text-center py-3 mb-3">Оставить отзыв</h3>
    <btn-close-layout/>
    <div class="mb-3">
      <StarRating :max="6" :current="0"></StarRating>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Пример текстового поля</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
  </form>
</template>
<style scoped></style>
