<script setup>
import { useRoute } from "vue-router";
import { usePlace } from "@/stores/place";
import { useForms } from "@/stores/forms";

const route = useRoute();
const placeStore = usePlace();
const placeId = route.params.id
placeStore.PLACE_PROFILE_PLACEID( placeId);

const formsStore = useForms()
const handleClick = (type) => {
  formsStore.openLayout(type)
}
</script>
<template>
  <div v-if="placeStore.isShow === 200">
    <h5 class="text-center">Plase {{ placeStore.itemPlase.name }}</h5>
  <div class="container-fluid">
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      
    >
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            :src="placeStore.itemPlase.image"
            class="img-fluid rounded-4"
            :alt="placeStore.itemPlase.name"
            style="width: 250px; height: 300px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ placeStore.itemPlase.name }}</h5>
            <p class="card-text">{{ placeStore.itemPlase.type }}</p>

            <p class="card-text">{{ placeStore.itemPlase.address }}</p>
            <p class="card-description">
              {{ placeStore.itemPlase.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
<div class="py-5 text-center fs-1" 
  v-else
  style="cursor: pointer;"
  @click="handleClick('writeUs')"

>Функция не доступна, свяжитесь пожалуйста со службой поддержки </div>
</template>
<style scoped></style>
