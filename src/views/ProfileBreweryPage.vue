<script setup>
import Card from '@/components/Card.vue';
import { useForms } from '@/stores/forms';
import { useBreweryStore } from '@/stores/breweryStore';
import { computed } from 'vue';

const breweryStore = useBreweryStore()
breweryStore._BREWERY_LIST_USER()
const breweryList = computed(() => breweryStore.getBreweryListUser)

const formsStore = useForms()

const openForm = (type) => {
   formsStore.openLayout(type)
   // console.log(type);
}
</script>
<template>
   <div class="position-relative">
      <button class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
         style="width: 270px;z-index: 10;top:-100px;left:120%;z-index: 10;"
         @click="openForm('addBrewery')"
      >
            Добавить пивоварню
        </button>
      <h4 class="text-center text-capitalize">Brewery Page</h4>
      <div class="container-fluid">
         <div class="col">
            <Card
               :typeCard="'brewery'"
               :item="item"
               v-for="item in breweryList"
               :key="item.id"
               :name="item.name"
               :description="item.description"
               :sity="item.sity"
               :image="item.image"
               :type="item.type"
            ></Card>
         </div>
      </div>
   </div>
</template>
<style scoped >

</style>