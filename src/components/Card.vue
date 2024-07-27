<script setup>
import { usePlaceStore } from '@/stores/placeStore';
const props = defineProps({
  item:{type:Object, required:true},
  beerId:Number,
  breweryId:Number,
  placeId:Number,
  name:String,
  breweryName:String,
  totalReviews:Number,
  averageRating:{type:Number, default:0},
  ibu:Number,
  abv:Number,
  address: String,
  description: {type:String, default:'no-description'},
  type: String,
  styleBeer:String,
  image: String,
  city: String,
  setAvailabilityOfSpaceForTheUser: Boolean,
  typeCard:String,
  address:String,
 
})

const placeStore = usePlaceStore()

const addToFavorite = (item) => {
    placeStore._PLACE_FAVORITE(item.placeId)    
  }

  const delFavorite = (item) => {
    placeStore._PLACE_FAVORITE_REMOVE(item.placeId)
}
</script>
<template>
    <div
    class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
    style="min-height: 430px;"
  >
    <div class="row g-0">
      <div class="col-4 p-3">
        <img
          v-if="props.image"
          :src="image"
          class="img-fluid rounded-4"
          :alt="name"
          style="width: 250px; height: 300px"
        />
        <div class="img-placeholder rounded-4" v-else>
          <span>No photo</span>
        </div>
      </div>
      <div class="col-md-8 d-flex flex-column p-3" style="min-height: 430px;">
        <div class="card-row justify-content-between ">
          <h5 class="card-title">{{ name }}</h5>
          <div class="card-favorite-icons" v-if="typeCard === 'place' || typeCard === 'placeFavorite'" >
            <i class="bi bi-heart" v-if="(!item.setAvailabilityOfSpaceForTheUser && typeCard === 'place')"  
            @click="addToFavorite(item)"
          ></i>
          <i class="bi bi-heart-fill" @click="delFavorite(item)" v-if="(item.setAvailabilityOfSpaceForTheUser && typeCard === 'place') || typeCard === 'placeFavorite'"></i>
          </div>

        </div>
        <div class="card-body p-0">
          <div class="d-flex align-items-center" v-if="typeCard === 'beer'">
            <span>Rating: {{ item.averageRating ? averageRating : 0}}</span>
          </div>
          <p class="card-text mb-0" v-if="item.city"> {{ city }}</p>
          <p class="card-text mb-0" v-if="item.address"> {{ address }}</p>
          <p class="card-text mb-0" v-if="item.ibu">IBU: {{ ibu }}</p>
          <p class="card-text mb-0" v-if="item.abv">ABV: {{ abv }}</p>
          <p class="card-text mb-0" v-if="item.breweryName">Производитель: {{ breweryName }}</p>
          <p class="card-text mb-0" v-if="item.type">{{ type }}</p>

          <p class="card-text mb-0" v-if="item.styleBeer">{{ styleBeer }}</p>
          <p class="card-description card-description-ellipsis mt-3">
            {{ description || 'no-description'}}
          </p>
        </div>
        <div class="card_footer">
          <p class="card-text mb-0" v-if="typeCard === 'beer'">Всего отзывов {{ item.totalReviews? totalReviews : 0 }}</p>
          <div class="card-row justify-content-between ">
            <button class="btn btn-outline-warning btn-sm rounded-5" >Подробнее</button>
            <button class="btn btn-outline-warning btn-sm rounded-5" v-if="typeCard === 'brewery'">Brewery</button>
            <button class="btn btn-outline-warning btn-sm rounded-5" v-if="typeCard === 'beer'">Beer</button>
            <button class="btn btn-outline-warning btn-sm rounded-5" v-if="typeCard === 'place'">Place</button>            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped >
.card-description {
   padding: 8px;
   transition: box-shadow 0.3s linear, border 0.3s linear;
   border : 1px solid #ffc107;
   /* box-shadow: 0 0 1px 1px #ffc107; */
   border-radius: 8px;
   -webkit-transition: box-shadow 0.3s linear, border 0.3s linear;
   -moz-transition: box-shadow 0.3s linear, border 0.3s linear;
   -ms-transition: box-shadow 0.3s linear, border 0.3s linear;
   -o-transition: box-shadow 0.3s linear, border 0.3s linear;
   
}
.card-body{
  flex:1 auto;
}
 .card-description-ellipsis{
   /* height: fit-content; */
   -webkit-box-orient: vertical;
   display: block;
   display: -webkit-box;
   overflow: hidden!important;
   text-overflow: ellipsis;
   -webkit-line-clamp: 3;
   line-height: 1.6rem;
 }
 .card-description::-webkit-scrollbar{
  width: 0;
 }
 .card-description:hover {
   box-shadow: 15px 15px 20px 1px #00000080;
   border-left: 1px solid #00000080 ;
   border-top: 1px solid #00000080;
   border-right: 1px solid transparent;
   border-bottom: 1px solid transparent;
 }
 .card-row{
   display: flex;
   align-items: center;
   padding: 0.25rem;
}
.card-row-overflow{
   max-height: 200px;
   height: fit-content;
   padding: 0.25rem;
   transition: box-shadow 0.3s linear;
   overflow-y: auto;
   box-shadow: 0 0 1px 1px #ffc107;
   border-radius: 8px;
 }
 .card-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px;
}
.img-placeholder{
  height: 300px;
  width: 100%;
  display: grid;
  place-content: center;
  background: #ccc;
}
i{
  color: #ffc107;
  cursor: pointer;
}
</style>