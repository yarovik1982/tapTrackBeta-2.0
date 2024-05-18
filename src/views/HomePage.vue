<script setup>
import Card from '@/components/Card.vue';
import Rating from 'primevue/rating'
import AppOffer from "@/components/AppOffer.vue";
import SliderPlices from "@/components/SliderPlices.vue";
import SliderReviews from '@/components/SliderReviews.vue'
import { ref } from 'vue';
const emits = defineEmits(["open-form"]);
const showForm = (type) => {
  emits("open-form", type);
};
const data = ref([
  {
    "id": 0,
    "feedbackText": "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
    "rating": 5.5,
    "imageFeedback": "string",
    "userName": "string",
    "breweryName": "string",
    "beerName": "Beer 1",
    "breweryId": 0,
    "beerId": 0,
    "imageUser": "string",
    "imageBeer": "src/assets/images/news1.jpg",
    "dateFeedback": "dd.mm.yyyy"
  },
  {
    "id": 1,
    "feedbackText": "Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.",
    "rating": 4.5,
    "imageFeedback": "string",
    "userName": "string",
    "breweryName": "string",
    "beerName": "Beer 2",
    "breweryId": 0,
    "beerId": 0,
    "imageUser": "string",
    "imageBeer": "src/assets/images/news2.jpg",
    "dateFeedback": "dd.mm.yyyy"
  }
])
const ratingValue = ref(0)
</script>

<template>
  <h1 class="text-center">Home Page</h1>
  <section id="hero" class="mb-5">
    <h3 class="section-title text-center text-capitalize"></h3>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-4">
          <div class="p-3">
            <h2 class="block-title">
              Насладитесь красивым закатом или приятной компанией с
              <span style="font-weight: bold">TapTreck</span>
            </h2>
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных
              живут рыбные тексты. Lorem пояс щеке переписывается вопрос.
              Безопасную вдали раз образ однажды.
            </p>
            <button
              class="btn btn-info btn-sm text-capitalize"
              @click="showForm('writeUs')"
            >
              написать нам
            </button>
          </div>
        </div>
        <div class="col-8">
          <div class="img rounded rounded-3 w-100">
            <img
              src="../assets/images/home.jpg"
              alt=""
              style="width: 100%; object-fit: cover; border-radius: 1rem"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="slider" class="mb-5">
    <h3 class="text-center mx-auto mb-5">
      <span class="section-title text-capitalize position-relative"
        >Популярные места</span
      >
    </h3>
    <slider-plices></slider-plices>
  </section>

  <section id="novelties" class="mb-5">
    <h5 class="text-center mx-auto mb-5 ">
      <span class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold"
        >новинки</span
      >
    </h5>
    <div class="px-2">
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col"
            v-for="item in data"
            :key="item.id"
          >
            <div class="card mb-3 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50"
             style="box-shadow: 0 0 20px 5px rgba(0, 0, 0, .2);"
             
            >
              <div class="row g-0">
                <div class="col-md-4 p-2">
                  <img :src="item.imageBeer" class="img-fluid rounded rounded-4" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{item.beerName}}</h5>
                    <div class="d-flex align-items-center">
                      <Rating class="starRating d-flex" v-model="item.rating" :cancel="false" :stars="6">
                      <template #onicon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star-fill" viewBox="0 0 16 16">
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                      </template>
                      <template #officon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-star" viewBox="0 0 16 16">
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                        </svg>
                      </template>
                    </Rating>
                    <span class="ms-2">{{ item.rating }}</span>
                    </div>
                    <p class="card-text">
                      {{ item.feedbackText }}
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary"
                        >Последнее обновление 3 мин. назад</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  <section id="reviews" class="mb-5">
    <h5 class="text-center mx-auto mb-5 ">
      <span class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold"
        >отзывы</span
      >
    </h5>
    <div class="bg-white py-3">
      <div class="container py-3">
      <slider-reviews/>
    </div>
    </div>
  </section>

  <section id="offer" class="">
    <AppOffer/>
  </section>
</template>
<style scoped>
.p-rating-item svg{
  width: 24px;
  height: 24px;
  fill: #ffc107;
  cursor: pointer;
}
.p-rating-item:not(:first-child) svg{
  margin-left:4px;
}
</style>
