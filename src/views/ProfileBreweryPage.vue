<script setup>
// import Rating from "primevue/rating";
import CardBrewery from '../components/CardBrewery.vue'
import { useForms } from "@/stores/forms";
import { useBreweries } from "@/stores/breweries";

const breweriesStore = useBreweries();
const userId = JSON.parse(localStorage.getItem("user"))?.userId;
breweriesStore.BREWERY_LIST_USER(userId);
const formsStore = useForms();
const openForm = (type) => {
  formsStore.openLayout(type);
};


</script>
<template>
  <div class="position-relative">
    <button
      class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
      style="width: 270px; z-index: 10; top: -150px; left: 120%"
      @click="openForm('addBrewery')"
    >
      Добавить пивоварню
    </button>
    <CardBrewery 
      :item="item"
      v-for="item in breweriesStore.dataList" 
      :key="item.id"
      
    ></CardBrewery>
    <!-- <h4 class="text-center">Brewery Page</h4> -->
    <!-- <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in breweriesStore.dataList"
      :key="item.placeId"
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
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex align-items-center">
             <star-rating :max="6" :current="item.averageRating" :size="60"></star-rating>
            </div>
            <p class="card-text">{{ item.type }}</p>

            <p class="card-text">{{ item.city }}</p>
            <p class="card-description">
              {{ item.description }}
            </p>
            <div class="card-row justify-content-between py-3">
              <button
                class="btn btn-outline-warning btn-sm rounded-4"
                @click="handleClick(item)"
              >
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<style scoped></style>
