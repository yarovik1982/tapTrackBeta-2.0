import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/url';
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))



export const useSetFavoriteStore = defineStore('setFavorite', {
 state: () => ({
   
 }),
 getters: {},
 actions: {
   async ADD_FAVORITE(placeId, userId) {
      const data = { placeId, userId };
      try {
        const response = await axios.post(`${BASE_URL}/place/favorite`,data,{
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
          
        });
        console.log(response.data);
        return response.data
      } catch (error) {
        console.error('Error in ADD_FAVORITE:', error);
      }
    },
    async REMOVE_FAVORITE(placeId, userId) {
      const data = { placeId, userId };
      try {
        await axios.delete(`${BASE_URL}/place/favorite/remove`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          data
        });
      } catch (error) {
        console.error('Error in REMOVE_FAVORITE:', error);
      }
    }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useSetFavoriteStore, import.meta.hot))
}
