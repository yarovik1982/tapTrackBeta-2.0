<script setup>
import Card from "@/components/Card.vue";
import AppSection from "@/components/AppSection.vue";
import StarRating from "@/components/StarRating.vue";
import AppOffer from "@/components/AppOffer.vue";
import SliderPlices from "@/components/SliderPlices.vue";
import SliderReviews from "@/components/SliderReviews.vue";
import { useForms } from "@/stores/forms";
import { useGetDataStore } from "@/stores/getData";
import { ref } from "vue";

const formsStore = useForms();
const getData = useGetDataStore()
getData.BEER_ADBLOCK()
const handleClick = (type) => {
  formsStore.openLayout(type);
};
const data = ref(getData.getBeerAdvList)

const rating = ref(3.5);
</script>

<template>
  
  <AppSection :id="'hero'">
    <!-- <template #slotTitle>
      
    </template> -->
    <template #slotBody>
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
                @click="handleClick('writeUs')"
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
    </template>
  </AppSection>

  <AppSection :id="'slider'" >
    <template #slotTitle>
      <h5 class="section-title text-center text-capitalize mb-5">
        <span class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold">Популярные места</span>
      </h5>
    </template>
    <template #slotBody>
      <slider-plices></slider-plices>
    </template>
  </AppSection>

  <section id="novelties" class="mb-5">
    <h5 class="text-center mx-auto mb-5">
      <span class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold">
        новинки
      </span>
    </h5>
    <div class="px-2">
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col" v-for="item in getData.getBeerAdvList" :key="item.id">
            <Card :item="item" :showStarRating="true"></Card>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="reviews" class="mb-5">
    <h5 class="text-center mx-auto mb-5">
      <span
        class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold"
        >отзывы</span
      >
    </h5>
    <div class="bg-white py-3">
      <div class="container py-3">
        <slider-reviews />
      </div>
    </div>
  </section>

  <section id="offer" class="">
    <AppOffer />
  </section>
</template>
<style scoped>
.p-rating-item svg {
  width: 24px;
  height: 24px;
  fill: #ffc107;
  cursor: pointer;
}
.p-rating-item:not(:first-child) svg {
  margin-left: 4px;
}
</style>
