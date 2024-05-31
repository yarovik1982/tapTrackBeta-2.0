<script setup>
import { useRouter } from 'vue-router';
import { BASE_URL } from '@/constants/url';
import axios from 'axios';
// import { useFavoritesStore } from '@/stores/favorites';

const router = useRouter()
const props = defineProps({
  isFavorite: {
    type: Boolean,
    required: false
  },
  itemId:{type:Number, required:false}
})
const token = JSON.parse(localStorage.getItem('token'))
const userId = JSON.parse(localStorage.getItem("user"))?.userId;
async function SEND_FAVORITE_REQUEST(state, id, userId) {
  const data = {
    placeId: id,
    userId: userId
  };

  try {
    const response = state
      ? await axios.post(`${BASE_URL}/place/favorite`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      : await axios.delete(`${BASE_URL}/place/favorite/remove`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data
        });

    return response.status;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.log(error);
    } else {
      console.error('Error in SEND_FAVORITE_REQUEST:', error);
      // Можно добавить уведомление пользователю или другую обработку ошибки
    }
  }
}
 const toggleFavorite = async () => {
  const state = router.currentRoute.value.path === '/profile-favorite' || props.isFavorite;
  await SEND_FAVORITE_REQUEST(state, props.itemId, userId);
  // console.log('Favorite request status:', status);
};
</script>

<template>
  <div>
    <i
      :class="[
        'bi',
        router.currentRoute.value.path === '/profile-favorite' || isFavorite ? 'bi-heart-fill' : 'bi-heart',
        'text-warning',
      ]"
      style="cursor: pointer;"
      :itemid="props.itemId"
      @click="toggleFavorite"
    ></i>
  </div>
</template>



<style scoped>
/* Стили для компонента */
</style>
