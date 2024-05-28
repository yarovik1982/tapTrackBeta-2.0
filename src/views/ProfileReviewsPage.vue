<script setup>
import { useReviewsStore } from '@/stores/reviews';

const userId = JSON.parse(localStorage.getItem("user"))?.userId;
const reviews = useReviewsStore()
reviews.FEEDBACK_LIST_USER(userId)

</script>
<template>
    <h4 class="text-center">Reviews Page</h4>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in reviews.reviews"
      :key="item.placeId"
    >
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            :src="item.imageBeer"
            class="img-fluid rounded-4"
            :alt="item.beerName"
            style="width: 250px; height: 300px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Пивоварня {{ item.breweryName }}</h5>
            <p class="card-text">Наименование {{ item.beerName }}</p>

           
            <p class="card-description">
              {{ item.feedbackText }}
            </p>
            
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped >

</style>