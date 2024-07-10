<script setup>
import Card from "@/components/Card.vue";
import FavoriteIcon from "@/components/UI/FavoriteIcon.vue";
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps({
  list:{
    type:Array,
    required:true
  }
});
</script>
<template>
  <Card :item="item" v-for="item in list " :key="item.title">
    <template #favoriteIcon>
      <FavoriteIcon></FavoriteIcon>
    </template>
    <template #placeType v-if="router.currentRoute.value.path === '/place'">
      <p class="card-text">{{ item.type }}</p>
    </template>
  </Card>
  
  <button
    class="btn btn-warning btn-sm text-white rounded rounded-5 m-auto d-block"
    style="width: 270px"
  >
    Показать еще
  </button>
</template>
<style scoped></style>
