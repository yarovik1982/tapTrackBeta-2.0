<script setup>
import { useRouter } from 'vue-router';
import StarRating from '@/components/StarRating.vue';
import AppButton from '@/components/UI/AppButton.vue'
import { useForms } from '@/stores/forms';
import { useFeedbackStore } from '@/stores/feedback';
const props = defineProps({
  cardType:{type:String, default:''},
  item:{type:Object, required:true},
  showStarRating:{type:Boolean, default:false},
})

const emits = defineEmits(['show-details'])

const showDetails = () => {
  emits('show-details')
}

const auth = JSON.parse(localStorage.getItem('user'))
const feedback = useFeedbackStore()
const router = useRouter()
const currRouter = router.currentRoute.value.path

const formsStore = useForms()

const openForm = (type) => {
  if(!auth){
    formsStore.openLayout('login')
  }else{
    formsStore.openLayout(type)
  }
}


</script>
<template>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow">
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            v-if="item.image"
            :src="item.image"
            class="img-fluid rounded-4"
            :alt="item.name"
            style="width: 250px; height: 300px"
          />
          <div class="img-placeholder rounded-4" v-else>
            <span>No photo</span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex align-items-center">
             <star-rating :max="6" :current="item.averageRating" :size="60" v-if="showStarRating"></star-rating>
            </div>
            <p class="card-text">Производитель: {{ item.breweryName }}</p>
            <p class="card-text" >{{ item.type }}</p>

            <p class="card-text">{{ item.style }}</p>
            <p class='card-description card-description-ellipsis'>
              {{ item.description }}
            </p>
            <p class="card-text">Всего отзывов {{ item.totalReviews }}</p>
            <div class="card-row justify-content-between py-3">
             <AppButton
              v-if="currRouter.includes('/beer')"
              id="details"
              :item="item"
              :btn-class="'btn btn-outline-warning btn-sm rounded-5'"
              @on-click="showDetails"
             >Details</AppButton>
             <AppButton 
              v-else
              id="addReview"
              :item="item"
              :btn-class="'btn btn-outline-warning btn-sm rounded-5'"
              @on-click="openForm('createFeedback')"
            >Добавить отзыв</AppButton>
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
</template>
<style scoped >
.img-placeholder{
  width: 250px;
  height: 300px;
  display: grid;
  place-content: center;
  background: #ccc;
}
.img-placeholder{
  color:blueviolet;
}
</style>