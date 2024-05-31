<script setup>
import StarRating from '@/components/StarRating.vue';
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
  {id:1,'name':'Brewery 1',"type":"Пивоварня","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news1.jpg', "averageRating":6},
  {id:2,'name':'Brewery 2',"type":"Сидродельня","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news2.jpg', "averageRating":4.8},
  {id:3,'name':'Brewery 3',"type":"Медоварня","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news3.jpg', "averageRating":5.3},
  {id:4,'name':'Brewery 4',"type":"Пивоварня","description":"Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",'image':'src/assets/images/news4.jpg', "averageRating":6},
])
</script>
<template>
    <div class="px-2">
      <h3 class="text-center text-capitalize">Bewery Page</h3>
      <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <div
            class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
            v-for="item in breweryList"
            :key="item.id"
          >
            <div class="row g-0 align-items-center">
              <div class="col-4 p-3">
                <img
                  :src="item.image"
                  class="img-fluid rounded-4"
                  :alt="item.name"
                  style="width: 250px; height: 300px"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h5 class="card-title">{{ item.name }}</h5>
                    
                  </div>
                  <p class="card-text">{{ item.type }}</p>
                  <star-rating
                    :max="6"
                    :current="item.averageRating"
                  />
                  <p class="card-description">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn btn-warning btn-sm text-white rounded rounded-5 m-auto d-block"
            style="width: 270px"
          >
            Показать еще
          </button>
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