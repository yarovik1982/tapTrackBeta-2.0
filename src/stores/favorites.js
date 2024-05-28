import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from "@/constants/url";
import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
const formsStore = useForms()

export const useFavoritesStore = defineStore('favorites', {
 state: () => ({
   favorites:[]
 }),
 getters: {},
 actions: {
   async USER_FAVORITE_PLACE(id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/user/favorite/place?id=${id}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         this.favorites = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            await localStorage.clear()
            formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useFavoritesStore, import.meta.hot))
}
