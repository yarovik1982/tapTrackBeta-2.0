<script setup>
import StarRating from '@/components/StarRating.vue';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
</script>
<template>
  <div>
    <!-- <h5 class="text-center">Plase {{ placeStore.itemPlase.name }}</h5> -->
  <div class="container">
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      
    >
      <div class="row g-0 align-items-center">
        <div class="col-4 p-3">
          <img
            :src="appStore.currentItem.image"
            class="img-fluid rounded-4"
            :alt="appStore.currentItem.name"
            style="width: 250px; height: 300px"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ appStore.currentItem.name }}</h5>
            <p class="card-text">{{ appStore.currentItem.type }}</p>
            <StarRating
              v-if="appStore.currentItem.averageRating"
              :max="6"
              :current="appStore.currentItem.averageRating"
            ></StarRating>
            <p class="card-text">{{ appStore.currentItem.address }}</p>
            <p class="card-description">
              {{ appStore.currentItem.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
<!-- <div class="py-5 text-center fs-1" v-else>Пока не заплатишь, - не увидишь!!!</div> -->
</template>
<style scoped></style>
