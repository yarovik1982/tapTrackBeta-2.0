<script setup>
import StarRating from '../components/StarRating.vue'
import CardBeer from '@/components/CardBeer.vue';
import BtnCreateBeer from '@/components/UI/BtnCreateBeer.vue'
import { useRouter } from 'vue-router';
// import { useRoute } from 'vue-router';
import { useBeerStore } from '@/stores/beer';
import { computed, ref } from 'vue';

const props = defineProps({
   item:{type:Object,required:true},
   action:{ttpe:()=>{},required:false}
})

const beerStore = useBeerStore()

const router = useRouter()
const currRouter = computed(() => router.currentRoute.value.path)

const breweryId = ref(null)
const handleClick = (item) => {
   console.log(item.id);
   breweryId.value = item.id
   router.push(`/profile-brewery/breweryId-${item.id}`)
   beerStore._BEER_LIST_BREWERY(item.id)
}

</script>
<template>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow">
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            :src="props.item.image"
            class="img-fluid rounded-4"
            :alt="props.item.name"
            style="width: 250px; height: 300px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ props.item.name }}</h5>
            <div class="d-flex align-items-center">
             <star-rating :max="6" :current="props.item.averageRating" :size="60"></star-rating>
            </div>
            <p class="card-text">{{ props.item.type }}</p>

            <p class="card-text">{{ props.item.city }}</p>
            <p class="card-description">
              {{ props.item.description }}
            </p>
            <div class="card-row justify-content-between py-3">
              <button
                class="btn btn-outline-warning btn-sm rounded-4"
                @click="handleClick(props.item)"
              >
                Подробнее
              </button>
              <BtnCreateBeer/>
            </div>
          </div>
        </div>
        <div class="container-fluid p-5" v-if="currRouter.includes('/profile-brewery/breweryId-')">
          <CardBeer 
          :beer-item="beerItem"
          v-for="beerItem in beerStore.getBeerListBrewery"
          :key="beerItem.id"
          
        ></CardBeer>
        </div>
      </div>
    </div>
</template>
<style scoped >

</style>