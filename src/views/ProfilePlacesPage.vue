<script setup>
import { useForms } from '@/stores/forms';

const formsStore = useForms()
const openForm = (type) => {
   formsStore.openLayout(type)
   console.log(type);
}
</script>
<template>
   <div class="position-relative">
      
        <button class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
            style="width: 270px;z-index: 10;top:-100px;left:120%;z-index: 10;"
            @click="openForm('addPlace')"
        >
            Добавить точку продаж
        </button>
    
      <h4 class="text-center">Places Page</h4>
   </div>
</template>
<style scoped >

</style>