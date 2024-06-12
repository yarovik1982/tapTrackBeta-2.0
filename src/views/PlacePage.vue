<script setup>
import AdvContent from "@/components/AdvContent.vue";
import { ref } from "vue";
import { useGetDataStore } from "@/stores/getData";
import { usePlace } from "@/stores/place";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/app";

const getData = useGetDataStore();
getData.PLACE_LIST();
getData.PLACE_ADBLOCK();
getData.BEER_ADBLOCK();
getData.BREWERY_ADBLOCK();

const placeStore = usePlace();
console.log(placeStore.dataList);

const showMoreData = () => {
  console.log("worked");
  getData.loadMorePlaces();
};
// const data = ref([
//   {
//     id: "1",
//     title: "berr-1",
//     placeId: 59,
//     name: "Пивнуха",
//     address: "Оренбуг, ул. Ленина, ",
//     description: "Классный бар",
//     type: "Бар",
//     image: "../assets/images/home.jpg",
//     city: "Оренбург",
//     geoLat: null,
//     geoLon: null,
//     setAvailabilityOfSpaceForTheUser: false,
//   },
//   {
//     id: "2",
//     title: "berr-2",
//     placeId: 125,
//     name: "Армянское пиво",
//     address: "Респ Крым, г Армянск, ул Симферопольская, д 4Д",
//     description: "Всегда свежее пиво с раками и раки со сраками",
//     type: "Бар",
//     image: "../assets/images/profile-favorites4.jpg",
//     city: "Армянск",
//     geoLat: 46.1117833,
//     geoLon: 33.6897774,
//     setAvailabilityOfSpaceForTheUser: true,
//   },
//   {
//     id: "3",
//     title: "berr-3",
//     placeId: 20,
//     name: "13 rules Bar&Shop",
//     address: "ул. Брюсова. д. 4/1",
//     description:
//       "Bar&Shop Крафтового пива. Всегда в наличии пиво на любой вкус и цвет! 20 кранов и 200 бутылок!",
//     type: "Бар",
//     image: "../assets/images/news4.jpg",
//     city: "Ковров",
//     geoLat: 56.354661,
//     geoLon: 41.310413,
//     setAvailabilityOfSpaceForTheUser: false,
//   },
//   {
//     id: "4",
//     title: "berr-4",
//     placeId: 21,
//     name: "Why Not?",
//     address: "ул. Островского. д. 47",
//     description:
//       "Новый взгляд на пиво! Аскетичный бар на улице Островского с огромным количеством крафтового пива со всей...",
//     type: "Бар",
//     image: "../assets/images/news3.jpg",
//     city: "Сочи",
//     geoLat: 43.589508,
//     geoLon: 39.723637,
//     setAvailabilityOfSpaceForTheUser: true,
//   },
//   {
//     id: "5",
//     title: "berr-5",
//     placeId: 58,
//     name: "card-image",
//     address: null,
//     description:
//       "cccccccccccc cccccccc ccccccccccc xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//     type: "Магазин",
//     image: "../assets/images/news2.jpg",
//     city: "Нью-йорк",
//     geoLat: 55.756994,
//     geoLon: 37.614006,
//     setAvailabilityOfSpaceForTheUser: false,
//   },
//   {
//     id: "6",
//     title: "berr-6",
//     placeId: 60,
//     name: "Пивная фактория",
//     address: "Респ Крым, г Армянск, ул Вишнёвая, двлд 1",
//     description: "Описание",
//     type: "Бар",
//     image: "../assets/images/news1.jpg",
//     city: "Армянск",
//     geoLat: 46.105885,
//     geoLon: 33.676735,
//     setAvailabilityOfSpaceForTheUser: true,
//   },
//   {
//     id: "7",
//     title: "berr-7",
//     placeId: 57,
//     name: "shop",
//     address: null,
//     description: "cccccccccc cccccc xxxxxxxxxxxx",
//     type: "Бар",
//     image: "../assets/images/image-5.png",
//     city: "Москва",
//     geoLat: 55.756994,
//     geoLon: 37.614006,
//     setAvailabilityOfSpaceForTheUser: false,
//   },
//   {
//     id: "8",
//     title: "berr-8",
//     placeId: 131,
//     name: "Oleg",
//     address: "г Москва, ул Тверская, д 1",
//     description: "",
//     type: "Бар",
//     image: "../assets/images/home.jpg",
//     city: "Москва",
//     geoLat: 55.756994,
//     geoLon: 37.614006,
//     setAvailabilityOfSpaceForTheUser: true,
//   },
// ]);

const appStore = useAppStore()
const router = useRouter()
const handleClick = (placeId) => {
  appStore.setCurrentPlace(placeId)
  router.push(`/element-${placeId}`)
  
}
</script>
<template>
  <div>
    <h3 class="text-center text-capitalize">Place Page</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <div
            class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
            v-for="item in getData.placeList"
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
                <div class="card-row justify-content-end py-3">
                  <button
                    class="btn btn-outline-warning btn-sm rounded rounded-5 me-2 d-block"
                    @click="handleClick(item.placeId)"
                  >
                    Подробнее
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn btn-warning btn-sm text-white rounded rounded-5 m-auto d-block"
            style="width: 270px"
            @click="showMoreData"
            v-if="getData.hasMorePlace"
          >
            Показать еще
          </button>
          <!-- <MainContent :list="placeList"/> -->
        </div>
        <div class="col-4 px-1">
          <AdvContent
            :titleText="'Рекомендованные места'"
            :class="'border-warning border border-2 rounded-3 rounded-bottom-0 mb-1 overflow-hidden bg-white bg-opacity-50'"
            :data="getData.placeAdvList"
          />
          <AdvContent
            :titleText="'Рекомендованные пивоварни'"
            :class="'border-warning border border-2 mb-1 overflow-hidden bg-white bg-opacity-50'"
            :data="getData.breweryAdvList"
          />
          <AdvContent
            :titleText="'Может быть интересно'"
            :class="'border-warning border border-2 rounded-3 rounded-top-0 overflow-hidden bg-white bg-opacity-50'"
            :data="getData.beerAdvList"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
