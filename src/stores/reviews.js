import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from "@/constants/url";

import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))


export const useReviewsStore = defineStore('reviews', {
 state: () => ({
   reviews:[],
   reviewsBeer:[],
   limit:45,
   offset: 0,

 }),
 getters: {
   getReviewsBeerList:(state) => {
      return state.reviewsBeer
   }
 },
 actions: {
   async FEEDBACK_LIST_USER(id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/feedback/list/user`,  {
            headers:{
               Authorization: `Bearer ${token}`
            },
            params:{
               id,
               limit:this.limit,
               offset:this.offset
            }
         })
         this.reviews = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            // formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   },
   async FEEDBACK_LIST_BEER(id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/feedback/list/beer`, {
            headers:{
               "Comtent-Type": "application/json"
            },
            params:{
               id,
               limit:this.limit,
               offset:this.offset
            }
         })
         this.reviewsBeer = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            // formsStore.openLayout('login')
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
