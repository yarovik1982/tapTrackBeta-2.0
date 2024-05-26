<script setup>
import { useRoute } from "vue-router";
import { usePlace } from "@/stores/place";

const route = useRoute();
const placeStore = usePlace();
// const userId = JSON.parse(localStorage.getItem("user"))?.userId;
const placeId = route.params.id
placeStore.PLACE_PROFILE_PLACEID( placeId);
</script>
<template>
  <h5 class="text-center">Plase {{ route.params.id }}</h5>
  <div class="container-fluid">
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      
    >
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            :src="placeStore.dataList.image"
            class="img-fluid rounded-4"
            :alt="placeStore.dataList.name"
            style="width: 250px; height: 300px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ placeStore.dataList.name }}</h5>
            <p class="card-text">{{ placeStore.dataList.type }}</p>

            <p class="card-text">{{ placeStore.dataList.address }}</p>
            <p class="card-description">
              {{ placeStore.dataList.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
