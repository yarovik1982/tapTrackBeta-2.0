<script setup>
import { useSetFavoriteStore } from '@/stores/setFavorite'

const setFavorite = useSetFavoriteStore()
const userId = JSON.parse(localStorage.getItem("user"))?.userId;

const props = defineProps({
  state: { type: Boolean, required: false },
  itemId: { type:Number, required: false }
});

// async function ADD_FAVORITE(placeId, userId) {
//   const data = { placeId, userId };
//   try {
//     await axios.post(`${BASE_URL}/place/favorite`, {
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       },
//       data
//     });
//   } catch (error) {
//     console.error('Error in ADD_FAVORITE:', error);
//   }
// }

const addFavorite = (itemId) => {
  setFavorite.ADD_FAVORITE(itemId, userId)
  location.reload()
}
</script>
<template>
    <i class="bi bi-heart text-warning" 
      :state="props.state"
      :itemId="props.itemId"
      @click="addFavorite(props.itemId)"
    ></i>
</template>
<style scoped>
i {
  cursor: pointer;
  color: #ffc107;
}
</style>
