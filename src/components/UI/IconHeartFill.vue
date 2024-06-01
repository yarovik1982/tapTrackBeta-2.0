<script setup>
import { useSetFavoriteStore } from '@/stores/setFavorite';

const setFavorite = useSetFavoriteStore()
const userId = JSON.parse(localStorage.getItem("user"))?.userId;



const props = defineProps({
   state: { type: Boolean, required: false },
   itemId: { type:Number, required: false }
});
// async function REMOVE_FAVORITE(placeId, userId) {
//   const data = { placeId, userId };
//   try {
//     await axios.delete(`${BASE_URL}/place/favorite/remove`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       data
//     });
//   } catch (error) {
//     console.error('Error in REMOVE_FAVORITE:', error);
//   }
// }

const removeFavorite = (itemId) => {
   setFavorite.REMOVE_FAVORITE(itemId,userId)
   location.reload()
}
</script>
<template>
  <i class="bi bi-heart-fill text-warning" 
   :state="props.state"
   :itemid="props.itemId"
   @click="removeFavorite(props.itemId)"
></i>
</template>
<style scoped>
i {
  color: #ffc107;
  cursor: pointer;
}
</style>
