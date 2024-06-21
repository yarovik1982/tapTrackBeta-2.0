<script setup>
import StarRating from "@/components/StarRating.vue";
import { useAppStore } from "@/stores/app";
import { useForms } from "@/stores/forms";
import { useReviewsStore } from "@/stores/reviews";
import { useRoute } from "vue-router";
import { useBeerStore } from "@/stores/beer";

const forms = useForms();
const opemMap = (type) => {
  forms.openLayout(type);
};
const appStore = useAppStore();

const route = useRoute()
console.log(route.params.id);
const reviews = useReviewsStore();
reviews.FEEDBACK_LIST_BEER(route.params.id)

const beer = useBeerStore()
beer._BEER_PLACE(route.params.id)
</script>
<template>
  <div>
    <h5 class="text-center">{{ appStore.currentItem.name }}</h5>
    <div class="container">
      <div
        class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow px-5"
      >
        <div class="row g-0 align-items-center">
          <div class="col-4 p-3">
            <img
              :src="appStore.currentItem.image"
              class="img-fluid rounded-4"
              :alt="appStore.currentItem.name"
              style="width: 250px; height: 300px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ appStore.currentItem.name }}</h5>
              <p class="card-text">{{ appStore.currentItem.style }}</p>
              <p class="card-text" 
                v-if="appStore.currentItem.abv !== undefined"
              ><span class="span-el">ABV: {{ appStore.currentItem.abv }}</span><span class="span-el ms-5">IBU: {{ appStore.currentItem.ibu }}</span></p>
              <p class="card-text">{{ appStore.currentItem.type }}</p>
              <p class="card-text">{{ appStore.currentItem.city }}</p>
              <p class="card-text" v-if="appStore.currentItem.breweryName">
                Производитель: {{ appStore.currentItem.breweryName }}
              </p>
              <StarRating
                v-if="appStore.currentItem.averageRating !== undefined"
                :max="6"
                :current="appStore.currentItem.averageRating || 0"
              ></StarRating>
              <p class="card-text">{{ appStore.currentItem.address }}</p>
              <p class="card-description">
                {{ appStore.currentItem.description }}
              </p>
              <p class="card-text" v-if="appStore.currentItem.geoLat">
                <button
                  class="btn btn-outline-warning btn-sm rounded-5"
                  @click="opemMap('map')"
                >
                  Показать на карте
                </button>
              </p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="container-fluid px-5" v-if="reviews.getReviewsBeerList">
          <div class="row px-3 mt-3">
            <div
              class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
              v-for="review in reviews.getReviewsBeerList"
              :key="review.id"
            >
              <div class="row g-0 ">
                <div class="col-2 p-2">
                  <img :src="review.imageUser" :alt="review.userName" style="width: 100%;aspect-ratio: 1;" class="rounded-circle">
                </div>
                <div class="col-8 p-2">
                  <div class="card-description mb-3">
                    <strong>{{ review.userName }} </strong>
                    оставил отзыв о
                    <strong> {{ review.beerName }}</strong>
                    сваренном в 
                    <strong> {{ review.breweryName }}</strong>
                    <hr>
                    <p class="card-text">{{ review.feedbackText }}</p>
                  </div>
                  <img :src="review.imageFeedback" :alt="review.id" style="width: 100%;aspect-ratio: 1/0.6;" class="rounded-3" v-if="review.imageFeedback">
                  <div 
                    v-else
                    style="width: 100%;aspect-ratio: 1/0.6;background: #ccc; display: flex;justify-content: center; align-items: center; color: #fff;" 
                    class="rounded-3 fs-2"
                  >no photo</div>
                  <div class="d-flex align-items-center justify-content-between mt-3">
                    <small>{{ review.dateFeedback }}</small>
                    <StarRating
                      :max="6"
                      :current="review.rating"
                    >

                    </StarRating>
                  </div>
                </div>
                <div class="col-2 p-2">
                  <img :src="review.imageBeer" :alt="review.beerId" style="width: 100%;aspect-ratio: 1;" class="rounded-3">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="container-fluid px-5" v-if="beer.getBeerPlace">
          <div class="row px-3 mt-3">
            <div
              class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
              v-for="beer in beer.getBeerPlace"
              :key="beer.id"
            >
            <div class="row g-0 align-items-center">
                <div class="col-4 p-3">
                  <img
                    :src="beer.image"
                    class="img-fluid rounded-4"
                    :alt="beer.name"
                    style="width: 250px; height: 300px"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ beer.name }}</h5>
                    <p class="card-text">{{ beer.style }}</p>
                    <StarRating
                      :max="6"
                      :current="beer.averageRating"
                    ></StarRating>
                    <p class="card-text">пивоварня: {{ beer.breweryName }}</p>
                    <p class="card-text">
                      <span class="span-el">ABV: {{ beer.abv }}</span
                      ><span class="span-el ms-5">IBU: {{ beer.ibu }}</span>
                    </p>

                    <p class="card-description">
                      {{ beer.description }}
                    </p>
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <p class="card-text">
                        Всего отзывов: {{ beer.totalReviews }}
                      </p>
                      <!-- <i class="bi bi-qr-code fs-2"                      
                        data-title="Распечатать QR-код"
                        @click="createQr(beer)"
                      ></i> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="py-5 text-center fs-1" v-else>Пока не заплатишь, - не увидишь!!!</div> -->
</template>
<style scoped></style>
