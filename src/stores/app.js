import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/url';
import axios from 'axios';

export const useAppStore = defineStore('app', {
 state: () => ({
   currentPlace:null,
   currentBeer:null,
   currentBrewery:null,
   currentType:''
 }),
 getters: {
   currentItem: (state) => {
      if (state.currentPlace) return (state.currentPlace);
      if (state.currentBeer) return (state.currentBeer);
      if (state.currentBrewery) return (state.currentBrewery);
      return (null);
    },
 },
 actions: {
   async setCurrentPlace(placeId) {
      const response = await axios.get(`${BASE_URL}/place/profile/${placeId}`)
      // Fetch place data from API and update state
      this.currentPlace = response.data;
      // this.currentType =  'place'
      this.currentBeer = null;
      this.currentBrewery = null;
      },
      async setCurrentBeer(beerId) {
        const response = await axios.get(`${BASE_URL}/beer/profile/${beerId}`)
        // Fetch beer data from API and update state
        this.currentBeer = response.data;
        // this.currentType = 'beer'
        this.currentPlace = null;
        this.currentBrewery = null;
        },
        async setCurrentBrewery(breweryId) {
          const response = await axios.get(`${BASE_URL}/brewery/profile/${breweryId}`)
          // Fetch brewery data from API and update state
          this.currentBrewery = response.data;
          // this.currentType = 'brewery'
          this.currentPlace = null;
          this.currentBeer = null;
    },
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
