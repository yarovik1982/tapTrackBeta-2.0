<script setup>
import Card from '@/components/Card.vue';
// import Rating from 'primevue/rating'
import AppOffer from "@/components/AppOffer.vue";
import SliderPlices from "@/components/SliderPlices.vue";
import SliderReviews from '@/components/SliderReviews.vue'
// import { usePlaceStoreStore } from '@/stores/placeStore';
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

  
    <slider-plices ></slider-plices>
  

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
