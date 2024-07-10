import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios';
import { BASE_URL } from '@/constants/constants';

export const usePlaceStoreStore = defineStore('placeStore', {
 state: () => ({
   placeAdvList:[],
 }),
 getters: {
   getPlaceAdvList:state => state.placeAdvList
 },
 actions: {
   async _PLACE_ADVBLOCK() {
      const response = await axios.get(`${BASE_URL}/place/adblock`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
         this.placeAdvList = response.data;
         return response.data
      
    },
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(usePlaceStoreStore, import.meta.hot))
}
