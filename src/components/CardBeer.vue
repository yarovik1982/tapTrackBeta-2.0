<script setup>
import StarRating from '@/components/StarRating.vue'
import BtnReviews from '@/components/UI/BtnReviews.vue'
import CardReview from '@/components/CardReview.vue'
import { useReviewsStore } from '@/stores/reviews';
import { useForms } from '@/stores/forms';
import { useQrCodeStore } from '@/stores/qrCode';

const formsStore = useForms()

const openForm = (type) => {
  formsStore.openLayout(type)
}

const props = defineProps({
   beerItem:{type:Object, required:true}
})

const reviewsStore = useReviewsStore()

const onOpenReviews = (id) => {
  reviewsStore.FEEDBACK_LIST_BEER(id)
}
const qrCode = useQrCodeStore()

const getItem = (item) => {
  qrCode.setContent(item)
}
</script>
<template>
  <div class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow">
    <div class="row g-0 align-items-center">
      <div class="col-4 p-3">
        <img
          :src="props.beerItem.image"
          class="img-fluid rounded-4"
          :alt="props.beerItem.name"
          style="width: 250px; height: 300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ props.beerItem.name }}</h5>
          <p class="card-text">{{ props.beerItem.style }}</p>
          <StarRating :max="6" :current="props.beerItem.averageRating"></StarRating>
          <p class="card-text">пивоварня: {{ props.beerItem.breweryName }}</p>
          <p class="card-text">
            <span class="span-el">ABV: {{ props.beerItem.abv }}</span
            ><span class="span-el ms-5">IBU: {{ props.beerItem.ibu }}</span>
          </p>

          <p class="card-description">
            {{ props.beerItem.description }}
          </p>
          <div class="d-flex align-items-center justify-content-between">
            <BtnReviews
              :reviews="props.beerItem.totalReviews"
              @open-reviews="onOpenReviews(props.beerItem.id)"
            ></BtnReviews>
            <i class="bi bi-qr-code fs-2 position-relative"                      
                        data-title="Сгенерировать QR-код"
                        @click=" openForm('qr'); getItem(props.beerItem.name)"
                      ></i>
          </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <CardReview
          :review="review"
          v-for="review in reviewsStore.getReviewsBeerList"
          :key="review.id"
        ></CardReview>
      </div>
    </div>
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
