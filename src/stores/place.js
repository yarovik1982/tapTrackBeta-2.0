import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
const formsStore = useForms()

export const usePlace = defineStore('placeStore', {
   state: () => ({
     dataList :[],
     loading :false

   }),
   
actions:{
   async PLACE_LIST_USER( id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/place/list/user?userId=${id}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         this.dataList = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            await localStorage.clear()
            formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   },
   async PLACE_PROFILE_PLACEID(placeId){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/place/profile/${placeId}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         this.dataList = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   }

}
   
})

