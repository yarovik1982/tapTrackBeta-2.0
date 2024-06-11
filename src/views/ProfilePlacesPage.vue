<script setup>
import IconHeart from "@/components/UI/IconHeart.vue";
import IconHeartFill from "@/components/UI/IconHeartFill.vue";
import { useForms } from "@/stores/forms";
import { usePlace } from "@/stores/place";
import axios from "axios";
import { BASE_URL } from "@/constants/url";
import { useRouter } from "vue-router";
import { ref } from "vue";

const formsStore = useForms();

const router = useRouter();
const handleClick = (id) => {
  router.push(`/profile-place-${id}`);
};
const placeStore = usePlace();

const token = JSON.parse(localStorage.getItem("token"));

const userId = JSON.parse(localStorage.getItem("user"))?.userId;
placeStore.PLACE_LIST_USER(userId);
// placeStore.FAKE_PLACE();

const openForm = (type) => {
  formsStore.openLayout(type);
};

async function ADD_FAVORITE(data, token) {
  try {
    const response = await axios.post(`${BASE_URL}/place/favorite`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log(error);
    } else {
      console.error("Error in ADD_FAVORITE:", error);
    }
  }
}
async function REMOVE_FAVORITE(data, token) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/place/favorite/remove`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.status;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log(error);
    } else {
      console.error("Error in REMOVE_FAVORITE:", error);
    }
  }
}

const setFavorite = async (itemId, state) => {
  const data = {
    userId: userId,
    placeId: itemId,
  };
  if (!state) {
    await ADD_FAVORITE(data, token);
    location.reload();
  } else await REMOVE_FAVORITE(data, token);
  // const isFavorite = item.setAvailabilityOfSpaceForTheUser
  // console.log(itemId);
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
      style="width: 270px; z-index: 10; top: -160px; left: 120%"
      @click="openForm('addPlace')"
    >
      Добавить точку продаж
    </button>

    <!-- <h4 class="text-center">Places Page</h4> -->
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
            <div class="card-row justify-content-end py-3">
              <button
                class="btn btn-outline-warning btn-sm  rounded rounded-5 me-2 d-block position-absolute"
                
                @click="handleClick(item.placeId)"
              >
                Подробнее
              </button>
            </div>
            <div class="card-row justify-content-center py-3">
              <button
                class="btn btn-warning btn-sm text-white rounded rounded-5 me-2 d-block position-absolute"
                style="width: 270px"
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
