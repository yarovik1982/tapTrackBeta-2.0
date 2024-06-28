<script setup>
const props = defineProps({
   item:{type:Object, required:true},
   
})
const emits = defineEmits(['show-details'])

const showDetails = () => {
   emits('show-details')
}
</script>
<template>
  
    <button class="btn btn-outline-warning" @click="showDetails">
      Детализация
    </button>
  
</template>
<style scoped></style>
