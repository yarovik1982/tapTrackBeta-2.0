<script setup>
import AdvContent from "@/components/AdvContent.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";
import { useGetDataStore } from "@/stores/getData";
import { useRouter } from "vue-router";
import { decompositionLink } from "@/functions/decompositionLink";

const router = useRouter()

const getData = useGetDataStore()
getData.BEER_LIST()
getData.PLACE_ADBLOCK()
getData.BEER_ADBLOCK()
getData.BREWERY_ADBLOCK()


const showMoreData = () => {
  getData.BEER_LIST()
}

const showDetails = (item) => {
  const {id, breweryName, beerName} = decompositionLink(item.link)
  router.push(`/${breweryName}/${beerName}_${id}`)
}

</script>
<template>
    <div>
      <h3 class="text-center text-capitalize">Beer Page</h3>
      <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <Card
            :item="item"
            :showStarRating="true"
            v-for="item in getData.beerList"
            :key="item.id"
            @show-details="showDetails(item)"
          ></Card>
          
          <button
            class="btn btn-warning btn-sm text-white rounded rounded-5 m-auto d-block"
            style="width: 270px"
            @click="showMoreData"
            v-if="getData.hasMoreBeer"
          >
            Показать еще
          </button>
        </div>
        <div class="col-4 px-1">
         <AdvContent
          :titleText="'Рекомендованные места'"
          :class="'border-warning border border-2 rounded-3 rounded-bottom-0 mb-1 overflow-hidden bg-white bg-opacity-50'"
          :data="getData.placeAdvList"
         />
         <AdvContent
          :titleText="'Рекомендованные пивоварни'"
          :class="'border-warning border border-2 mb-1 overflow-hidden bg-white bg-opacity-50'"
          :data="getData.breweryAdvList"
        />
         <AdvContent
          :titleText="'Может быть интересно'"
          :class="'border-warning border border-2 rounded-3 rounded-top-0 overflow-hidden bg-white bg-opacity-50'"
          :data="getData.beerAdvList"
        />
        </div>
      </div>
    </div>
    </div>
</template>
<style scoped >

</style>