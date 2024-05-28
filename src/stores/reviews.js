import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from "@/constants/url";
import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
const formsStore = useForms()

export const useReviewsStore = defineStore('reviews', {
 state: () => ({
   reviews:[],
   limit:45,
   offset: 0,

 }),
 getters: {},
 actions: {
   async FEEDBACK_LIST_USER(id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/feedback/list/user?id=${id}&limit=${this.limit}&offset=${this.offset}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         this.reviews = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useReviewsStore, import.meta.hot))
}
