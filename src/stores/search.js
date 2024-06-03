import { BASE_URL } from '@/constants/url'
import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSearchStore = defineStore('search', {
 state: () => ({
    searchBeerResult:[],
    searchPlaceResult:[],
    searchBreweryResult:[],
   
 }),
 getters: {},
 actions: {
   async _SEARCH_BEER(name){
      try{
         const response = await axios.get(`${BASE_URL}/search/beer`,{
            params:{name},
            headers:{
               "Content-Type": "application/json"
            }
         })
         this.searchBeerResult = response.data.beer
         this.searchBreweryResult = response.data.brewery
         this.searchPlaceResult = response.data.place
      }catch (error){
         console.error("SEARCH_BEER: ", error);
      }
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
}
