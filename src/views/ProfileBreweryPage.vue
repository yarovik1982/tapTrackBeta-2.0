<script setup>
import Rating from "primevue/rating";
import { useForms } from "@/stores/forms";
import { useBreweries } from "@/stores/breweries";

const breweriesStore = useBreweries();
const userId = JSON.parse(localStorage.getItem("user"))?.userId;
breweriesStore.BREWERY_LIST_USER(userId);
const formsStore = useForms();
const openForm = (type) => {
  formsStore.openLayout(type);
};
</script>
<template>
  <div class="position-relative">
    <button
      class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
      style="width: 270px; z-index: 10; top: -100px; left: 120%"
      @click="openForm('addBrewery')"
    >
      Добавить пивоварню
    </button>
    <h4 class="text-center">Brewery Page</h4>
    <div
      class="card mb-4 border-warning border-2 rounded rounded-4 bg-white bg-opacity-50 card-shadow"
      v-for="item in breweriesStore.dataList"
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
              <Rating
                class="starRating d-flex"
                v-model="item.averageRating"
                :cancel="false"
                :stars="6"
              >
                <template #onicon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </template>
                <template #officon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </template>
              </Rating>
              <span class="ms-2">{{ item.averageRating }}</span>
            </div>
            <p class="card-text">{{ item.type }}</p>

            <p class="card-text">{{ item.city }}</p>
            <p class="card-description">
              {{ item.description }}
            </p>
            <!-- <div class="card-row justify-content-center py-3">
              <button
                class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
                style="width: 270px"
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
<style scoped></style>
