<script setup>
import { useFavoritesStore } from '@/stores/favorites';

const favorites = useFavoritesStore()
const userId = JSON.parse(localStorage.getItem("user"))?.userId;
favorites.USER_FAVORITE_PLACE(userId)
</script>
<template>
    <h4 class="text-center">Favorite Page</h4>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in favorites.favorites"
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
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex align-items-center">
              
            </div>
            <p class="card-text">{{ item.type }}</p>

            <p class="card-text">{{ item.city }}</p>
            <p class="card-description">
              {{ item.description }}
            </p>
            
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped >

</style>