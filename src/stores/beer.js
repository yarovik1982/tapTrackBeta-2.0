import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/url'
import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'))
const headers = {
   "Authorization": `Bearer ${token}`,
   "Content-Type": "application/json"
}
export const useBeerStore = defineStore('beer', {
 state: () => ({
   limit:45,
   offset:0,
   beerList:[],
   beerListBrewery:[],
   beerItem:{},
   beerAddList:[],

 }),
 getters: {
   getBeerPlace:(state) => {return state.beerList},
   // @-------------------------------------------
   getBeerListBrewery:(state) => {return state.beerListBrewery},
   // @-------------------------------------------
   getBeerItem:(state) => state.beerItem,
   //@------------------------------------------- 
   getBeerAddList:state => state.beerAddList,
 },
 actions: {
   async _BEER_PLACE(id){
      try{
         const response = await axios.get(`${BASE_URL}/beer/place`,{
            headers:{
               "Content-Type":"application/json"
            },
            params:{
               id,
               limit:this.limit,
               offset:this.offset
            }
         })
         this.beerList = response.data
      }catch(error){
         console.error(error)
      }
   },

   async _BEER_LIST_BREWERY(breweryId){
      const response = await axios.get(`${BASE_URL}/beer/list/brewery`, {
         headers,
         params:{
            breweryId,
            limit:this.limit,
            offset:this.offset
         }
      })
      if(response.status === 200){
         this.beerListBrewery = response.data
         return response.data
      }else{
         console.error(response.error, response.status);
      }
   },

   async _BEER_CREATE(data, params){
      try {
         const headers = data instanceof FormData
           ? { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
           : { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
     
         const response = await axios.post(`${BASE_URL}/beer/create`, data, {
           headers,
           params
         });
     
         return response.data; // Возвращаем данные из ответа
       } catch (error) {
         console.error("Error making request:", error.status, error.response?.data);
         throw error; // Перебрасываем ошибку наверх
       }
   },

   async _BEER_PROFILE(beerId){
      try{
         const response = await axios.get(`${BASE_URL}/beer/profile/${beerId}`, {
            headers:{
               "Content-Type": 'application/json' 
            }
         })
      if(response.status === 200){
         this.beerItem = response.data
         return response.data
      }
      }catch(error){
         console.log("Ошибка получения данных", response.error);
      }
   },

   async _BEER_ADDBLOCK(){
      try{
         const response = await axios.get(`${BASE_URL}/beer/addblock`)
         if(response.status === 200){
            this.beerAddList = response.data
            return response.data
         }
      }catch(error){}
   }
 },

})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useBeerStore, import.meta.hot))
}
