<script setup>
const emits = defineEmits(['open-form'])

const openForm = (type) => {
   emits('open-form', type)
//    console.log(type);
}
</script>
<template>
   <div class="position-relative">
      
        <button class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
            style="width: 270px;z-index: 10;top:-100px;left:120%;"
            @click="openForm('addPlace')"
        >
            Добавить точку продаж
        </button>
    
      <h4 class="text-center">Places Page</h4>
   </div>
</template>
<style scoped >

</style>