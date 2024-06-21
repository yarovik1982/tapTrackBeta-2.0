<script setup>
const props = defineProps({
   id:{type:Number, required:true},
   reviews:{type:Number, required:false}
})
const emits = defineEmits(['open-reviews'])

const openReviews = (id) => {
   emits('open-reviews', id)
}
</script>
<template>
  
    <button class="btn btn-outline-warning" @click="openReviews(props.id)">
      Всего отзывов: {{ props.reviews }}
    </button>
  
</template>
<style scoped></style>
