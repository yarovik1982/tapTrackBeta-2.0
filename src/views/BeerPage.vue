<script setup>
import AdvContent from "@/components/AdvContent.vue";
import { ref } from "vue";
import { useGetDataStore } from "@/stores/getData";

const getData = useGetDataStore()
getData.BEER_LIST()
getData.PLACE_ADBLOCK()
getData.BEER_ADBLOCK()
getData.BREWERY_ADBLOCK()

</script>
<template>
    <div>
      <h3 class="text-center text-capitalize">Beer Page</h3>
      <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
          <div
            class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
            v-for="item in getData.beerList"
            :key="item.id"
          >
            <div class="row g-0 align-items-center">
              <div class="col-4 p-3">
                <img
                  :src="item.image"
                  class="img-fluid rounded-4"
                  :alt="item.name"
                  style="width: 250px; height: 300px"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <h5 class="card-title">{{ item.name }}</h5>
                    
                  </div>
                  <p class="card-text">{{ item.city }}</p>

                  <p class="card-text">{{ item.address }}</p>
                  <p class="card-description">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            class="btn btn-warning btn-sm text-white rounded rounded-5 m-auto d-block"
            style="width: 270px"
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