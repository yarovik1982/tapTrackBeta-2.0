<script setup>
import MainContent from '@/components/MainContent.vue'
import AdvContent from '@/components/AdvContent.vue';
import { ref } from 'vue'

// const emits = defineEmits(['emit-layout'])
// const toggleLayout = () => {
//   emits('emit-layout')
// }
const placeList = ref([
  {id:1,'name':'Place 1', "image":'src/assets/images/news1.jpg' },
  {id:2,'name':'Place 2', "image":'src/assets/images/news2.jpg' },
  {id:3,'name':'Place 3', "image":'src/assets/images/news3.jpg' },
  {id:4,'name':'Place 4', "image":'src/assets/images/news4.jpg' },
])
const beerList = ref([
{id:1,'name':'Beer 1', 'image':'src/assets/images/news1.jpg'},
  {id:2,'name':'Beer 2', 'image':'src/assets/images/news2.jpg'},
  {id:3,'name':'Beer 3', 'image':'src/assets/images/news3.jpg'},
  {id:4,'name':'Beer 4', 'image':'src/assets/images/news4.jpg'},
])
const breweryList = ref([
  {id:1,'name':'Brewery 1',"type":"Бар","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news1.jpg'},
  {id:2,'name':'Brewery 2',"type":"Бар","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news2.jpg'},
  {id:3,'name':'Brewery 3',"type":"Бар","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news3.jpg'},
  {id:4,'name':'Brewery 4',"type":"Бар","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news4.jpg'},
])
</script>
<template>
    <div class="px-2">
      <h3 class="text-center text-capitalize">Bewery Page</h3>
      <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <MainContent :list="breweryList"/>
        </div>
        <div class="col-4 px-1">
         <AdvContent
          :titleText="'Рекомендованные места'"
          :class="'border-warning border border-2 rounded-3 rounded-bottom-0 mb-1 overflow-hidden bg-white bg-opacity-50'"
          :data="placeList"
         />
         <AdvContent
          :titleText="'Рекомендованные пивоварни'"
          :class="'border-warning border border-2 mb-1 overflow-hidden bg-white bg-opacity-50'"
          :data="breweryList"
        />
         <AdvContent
          :titleText="'Может быть интересно'"
          :class="'border-warning border border-2 rounded-3 rounded-top-0 overflow-hidden bg-white bg-opacity-50'"
          :data="beerList"
        />
        </div>
      </div>
    </div>
    </div>
</template>
<style scoped >

</style>