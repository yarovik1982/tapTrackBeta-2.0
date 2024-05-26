<script setup>
import { useForms } from "@/stores/forms";
import { usePlace } from "@/stores/place";
import { watch } from "vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";


const formsStore = useForms();

const router = useRouter();
const handleClick = (id) => {
  router.push(`/profile-place-${id}`);
};
const placeStore = usePlace();

const userId = JSON.parse(localStorage.getItem("user"))?.userId;
placeStore.PLACE_LIST_USER(userId);

const openForm = (type) => {
  formsStore.openLayout(type);
};
</script>
<template>
  <teleport to="body" v-if="placeStore.loading">
    <div class="layout position-fixed top-0 start-0 w-100 h-100">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Загрузка...</span>
      </div>
    </div>
  </teleport>
  <div class="position-relative">
    <button
      class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
      style="width: 270px; z-index: 10; top: -100px; left: 120%"
      @click="openForm('addPlace')"
    >
      Добавить точку продаж
    </button>

    <h4 class="text-center">Places Page</h4>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in placeStore.dataList"
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
            <p class="card-text">{{ item.type }}</p>

            <p class="card-text">{{ item.address }}</p>
            <p class="card-description">
              {{ item.description }}
            </p>
            <div class="card-row justify-content-center py-3">
              <button
                class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
                style="width: 270px"
                @click="handleClick(item.placeId)"
              >
                Ассортимент
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
