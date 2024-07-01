<script setup>
import StarRating from "@/components/StarRating.vue";
import { useRoute } from "vue-router";
import { usePlace } from "@/stores/place";
import { useForms } from "@/stores/forms";
// import { ref } from "vue";
// import QRCode from "qrcode";
import { useBeerStore } from "@/stores/beer";
import { useReviewsStore } from "@/stores/reviews";

const route = useRoute();
const placeStore = usePlace();
const placeId = route.params.id;
placeStore.PLACE_PROFILE_PLACEID(placeId);

const formsStore = useForms();
const handleClick = (type) => {
  formsStore.openLayout(type);
};

// const createQr = (beer) => {
//   console.log(beer.name);
// };

const beer = useBeerStore();
beer._BEER_PLACE(placeId);

const reviews = useReviewsStore();
const openReviews = (beer) => {
  reviews.FEEDBACK_LIST_BEER(beer.id);
};
</script>
<template>
  <div v-if="placeStore.isShow === 200">
    <!-- <h5 class="text-center">Plase {{ placeStore.itemPlase.name }}</h5> -->
    <div class="container-fluid">
      <div
        class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      >
        <div class="row g-0 align-items-center">
          <div class="col-4 p-3">
            <img
              :src="placeStore.itemPlase.image"
              class="img-fluid rounded-4"
              :alt="placeStore.itemPlase.name"
              style="width: 250px; height: 300px"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ placeStore.itemPlase.name }}</h5>
              <p class="card-text">{{ placeStore.itemPlase.type }}</p>

              <p class="card-text">{{ placeStore.itemPlase.address }}</p>
              <p class="card-description">
                {{ placeStore.itemPlase.description }}
              </p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="container-fluid">
          <h4 class="text-center py-3">Beer List</h4>
          <div class="row px-3">
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
                      <button
                        class="btn btn-outline-warning"
                        @click="openReviews(beer)"
                      >
                        Всего отзывов: {{ beer.totalReviews }}
                      </button>
                      <!-- <i
                        class="bi bi-qr-code fs-2"
                        data-title="Распечатать QR-код"
                        @click="createQr(beer)"
                      ></i> -->
                    </div>
                    <!--  -->
                    <!--  -->
                  </div>
                </div>
                <div
                  class="container-fluid px-5"
                  v-if="reviews.getReviewsBeerList"
                >
                  <div class="row px-3 mt-3">
                    <div
                      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
                      v-for="review in reviews.getReviewsBeerList"
                      :key="review.id"
                    >
                      <div class="row g-0">
                        <div class="col-2 p-2">
                          <img
                            :src="review.imageUser"
                            :alt="review.userName"
                            style="width: 100%; aspect-ratio: 1"
                            class="rounded-circle"
                          />
                        </div>
                        <div class="col-8 p-2">
                          <div class="card-description mb-3">
                            <strong>{{ review.userName }} </strong>
                            оставил отзыв о
                            <strong> {{ review.beerName }}</strong>
                            сваренном в
                            <strong> {{ review.breweryName }}</strong>
                            <hr />
                            <p class="card-text">
                              {{ review.feedbackText }}
                            </p>
                          </div>
                          <img
                            :src="review.imageFeedback"
                            :alt="review.id"
                            style="width: 100%; aspect-ratio: 1/0.6"
                            class="rounded-3"
                            v-if="review.imageFeedback"
                          />
                          <div
                            v-else
                            style="
                              width: 100%;
                              aspect-ratio: 1/0.6;
                              background: #ccc;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              color: #fff;
                            "
                            class="rounded-3 fs-2"
                          >
                            no photo
                          </div>
                          <div
                            class="d-flex align-items-center justify-content-between mt-3"
                          >
                            <small>{{ review.dateFeedback }}</small>
                            <StarRating :max="6" :current="review.rating">
                            </StarRating>
                          </div>
                        </div>
                        <div class="col-2 p-2">
                          <img
                            :src="review.imageBeer"
                            :alt="review.beerId"
                            style="width: 100%; aspect-ratio: 1"
                            class="rounded-3"
                          />
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
    </div>
  </div>
  <div
    class="py-5 text-center fs-1"
    v-else
    style="cursor: pointer"
    @click="handleClick('writeUs')"
  >
    Для выбранной точки продаж опция не доступна, свяжитесь пожалуйста со службой поддержки
  </div>
</template>
<style scoped>
.bi-qr-code {
  transition: opacity 0.3s linear;
  cursor: pointer;
  position: relative;
}
.bi-qr-code::after {
  position: absolute;
  content: attr(data-title);
  top: -20px;
  right: 0;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 16px;
  width: fit-content;
  white-space: nowrap;
  opacity: 0;
}
.bi-qr-code:hover:after {
  opacity: 1;
}
</style>
