<script setup>
const props = defineProps({
   item:{type:Object, required:true},
   
})
const emits = defineEmits(['show-reviews'])

const showReviews = () => {
   emits('show-reviews')
}
</script>
<template>
  
    <button class="btn btn-outline-warning" @click="showReviews">
      <slot></slot>
    </button>
  
</template>
<style scoped></style>
