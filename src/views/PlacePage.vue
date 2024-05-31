<script setup>
import AdvContent from "@/components/AdvContent.vue";
import { ref } from "vue";
import { usePlaces } from "@/stores/getPlaces";
import { storeToRefs } from "pinia";

const placeList = ref([
  {
    placeId: 1,
    name: "Place 1",
    type: "Бар",
    description: "Описание Описание Описание Описание ",
    image: "src/assets/images/news1.jpg",
  },
  {
    placeId: 2,
    name: "Place 2",
    type: "Бар",
    description:
      "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
    image: "src/assets/images/news2.jpg",
  },
  {
    placeId: 3,
    name: "Place 3",
    type: "Бар",
    description:
      "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
    image: "src/assets/images/news3.jpg",
  },
  {
    placeId: 4,
    name: "Place 4",
    type: "Бар",
    description:
      "Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание ",
    image: "src/assets/images/news4.jpg",
  },
]);
const beerList = ref([
  { id: 1, name: "Beer 1", image: "src/assets/images/news1.jpg" },
  { id: 2, name: "Beer 2", image: "src/assets/images/news2.jpg" },
  { id: 3, name: "Beer 3", image: "src/assets/images/news3.jpg" },
  { id: 4, name: "Beer 4", image: "src/assets/images/news4.jpg" },
]);
const breweryList = ref([
  { id: 1, name: "Brewery 1", image: "src/assets/images/news1.jpg" },
  { id: 2, name: "Brewery 2", image: "src/assets/images/news2.jpg" },
  { id: 3, name: "Brewery 3", image: "src/assets/images/news3.jpg" },
  { id: 4, name: "Brewery 4", image: "src/assets/images/news4.jpg" },
]);
const isFavorite = ref(true);
</script>
<template>
  <div>
    <h3 class="text-center text-capitalize">Place Page</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <div
            class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
            v-for="item in placeList"
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
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h5 class="card-title">{{ item.name }}</h5>
                    
                  </div>
                  <p class="card-text">{{ item.type }}</p>

                  <p class="card-text">{{ item.address }}</p>
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
          <!-- <MainContent :list="placeList"/> -->
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
<style scoped></style>
