<script setup>
import Card from '@/components/Card.vue';
import { useForms } from '@/stores/forms';
import { usePlaceStore } from '@/stores/placeStore';
import { computed } from 'vue';


const placeStore = usePlaceStore()
placeStore._PLACE_LIST_USER()
const placeList = computed(() => placeStore.getPlaceListUser)
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
      <div class="container-fluid">
         <div class="col">
            <Card
               :typeCard="'place'"
               :item="item"
               v-for="item in placeList"
               :key="item.id"
               :name="item.name"
               :address="item.address"
               :description="item.description"
               :type="item.type"
               :image="item.image"
               :city="item.city"
            ></Card>
         </div>
      </div>
   </div>
</template>
<style scoped >

</style>