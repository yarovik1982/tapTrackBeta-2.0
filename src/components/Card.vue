<script setup>
// import FavoriteIcon from '@/components/UI/FavoriteIcon.vue'

const props = defineProps({
  item:{
    type:Object,
    required:true,
  }
})
</script>
<template>
  <div class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 box-shadow" >
    <div class="row g-0 align-items-center">
      <div class="col-md-4 p-3">
        <img :src="item.image" class="img-fluid rounded rounded-4" width="250" height="300" :alt="item.name" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="card-title">{{item.name}}</h5>
            <slot name="favoriteIcon">
              <!-- <favorite-icon></favorite-icon> -->
            </slot>
          </div>
          <div class="card-text">{{ item.city }}</div>
          <slot name="rating"></slot>
          <slot name="placeType"></slot>
         <!-- <p class="card-text">{{ item.type }}</p> -->
          <p class="card-text card-description">
            {{item.description}}
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Последнее обновление 3 мин. назад</small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box-shadow{
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 20px 0px;
}
</style>
