<script setup>
import StarRating from './StarRating.vue';
const props = defineProps({
   review:{type:Object,required:true}
})
</script>
<template>
    <div class="row px-3 mt-3">
            <div class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow">
              <div class="row g-0 ">
                <div class="col-2 p-2">
                  <img 
                    :src="review.imageUser" 
                    :alt="review.userName" 
                    style="width: 100%;aspect-ratio: 1;" 
                    class="rounded-circle"
                    v-if="review.imageUser"
                  />
                  <div class="img-placeholder" v-else>
                    <span class="placeholder-text">No photo</span>
                  </div>
                </div>
                <div class="col-8 p-2">
                  <div class="card-description mb-3">
                    <strong>{{review.userName }} </strong>
                    оставил отзыв о
                    <strong> {{ review.beerName }}</strong>
                    сваренном в 
                    <strong> {{ review.breweryName }}</strong>
                    <hr>
                    <p class="card-text">{{ review.feedbackText }}</p>
                  </div>
                  <img :src="review.imageFeedback" :alt="props.review.id" style="width: 100%;aspect-ratio: 1/0.6;" class="rounded-3" v-if="review.imageFeedback">
                  <div 
                    v-else
                    style="width: 100%;aspect-ratio: 1/0.6;background: #ccc; display: flex;justify-content: center; align-items: center; color: #fff;" 
                    class="rounded-3 fs-2"
                  >no photo</div>
                  <div class="d-flex align-items-center justify-content-between mt-3">
                    <small>{{ review.dateFeedback }}</small>
                    <StarRating
                      :max="6"
                      :current="props.review.rating"
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
</template>
<style scoped >
.img-placeholder {
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  border-radius: 50%;
  background: #ccc;
}
.placeholder-text {
  font-size: 10px;
  color:#fff;
}
</style>