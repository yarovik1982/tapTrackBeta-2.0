<script setup>
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

const search = useSearchStore()
const { searchBeerResult } = storeToRefs(search)
</script>
<template>
    <h5 class="text-center">
      Result Search Beer
    </h5>
    <div class="container">
      <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in searchBeerResult"
      :key="item.placeId"
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
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">{{ item.name }}</h5>
              <div>
                <icon-heart
                  :state="item.setAvailabilityOfSpaceForTheUser"
                  :itemId="item.placeId"
                 v-if="!item.setAvailabilityOfSpaceForTheUser"
                />
                <icon-heart-fill
                  :state="item.setAvailabilityOfSpaceForTheUser"
                  :itemid="item.placeId"
                  v-else
                />
              </div>
            </div>
            <p class="card-text">{{ item.type }}</p>

            <p class="card-text">{{ item.address }}</p>
            <p class="card-description">
              {{ item.description }}
            </p>
            <!-- <div class="card-row justify-content-center py-3">
              <button
                class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
                style="width: 270px"
                @click="handleClick(item.placeId)"
              >
                Ассортимент
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<style scoped >

</style>